import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Image } from "lucide-react";

const Admin = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-luxury-dark">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" onClick={handleSignOut} size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Button
            onClick={() => navigate("/admin/properties")}
            className="h-32 flex flex-col items-center justify-center gap-4 bg-card hover:bg-accent border border-border"
            variant="outline"
          >
            <Image className="w-8 h-8 text-primary" />
            <span className="text-lg font-semibold text-foreground">Manage Property Images</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Admin;
