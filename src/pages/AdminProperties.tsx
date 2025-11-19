import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminProperties = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState<string | null>(null);

  const { data: properties, isLoading } = useQuery({
    queryKey: ["admin-properties"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*, property_images(*)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async ({ propertyId, file }: { propertyId: string; file: File }) => {
      const fileExt = file.name.split(".").pop();
      const fileName = `${propertyId}/${Math.random()}.${fileExt}`;
      const { error: uploadError, data } = await supabase.storage
        .from("property-images")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("property-images")
        .getPublicUrl(fileName);

      const { error: insertError } = await supabase
        .from("property_images")
        .insert({ property_id: propertyId, image_url: publicUrl });

      if (insertError) throw insertError;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-properties"] });
      toast({ title: "Image uploaded successfully" });
      setUploading(null);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      setUploading(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async ({ imageId, imageUrl }: { imageId: string; imageUrl: string }) => {
      const filePath = imageUrl.split("/property-images/")[1];
      await supabase.storage.from("property-images").remove([filePath]);
      const { error } = await supabase.from("property_images").delete().eq("id", imageId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-properties"] });
      toast({ title: "Image deleted successfully" });
    },
  });

  const handleFileUpload = async (propertyId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(propertyId);
    uploadMutation.mutate({ propertyId, file });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-luxury-dark flex items-center justify-center">
        <div className="text-gold text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-dark">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate("/admin")} size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Manage Property Images</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {properties?.map((property) => (
            <Card key={property.id} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">{property.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{property.location}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-foreground">
                    Upload New Image
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(property.id, e)}
                      disabled={uploading === property.id}
                      className="bg-background text-foreground border-border"
                    />
                    {uploading === property.id && (
                      <span className="text-sm text-muted-foreground">Uploading...</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.property_images?.map((image: any) => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.image_url}
                        alt="Property"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() =>
                          deleteMutation.mutate({ imageId: image.id, imageUrl: image.image_url })
                        }
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminProperties;
