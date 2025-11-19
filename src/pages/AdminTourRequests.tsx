import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTourRequests, useUpdateTourRequestStatus } from "@/hooks/useTourRequests";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  ArrowLeft, Calendar, Clock, MapPin, User, Mail, 
  Phone, Video, CheckCircle, XCircle, AlertCircle 
} from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const AdminTourRequests = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [notes, setNotes] = useState("");

  const { data: tourRequests, isLoading } = useTourRequests({
    status: statusFilter,
  });

  const updateStatus = useUpdateTourRequestStatus();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await updateStatus.mutateAsync({ 
        id, 
        status: newStatus,
        notes: notes || undefined 
      });
      toast({
        title: "Status Updated",
        description: `Tour request marked as ${newStatus}`,
      });
      setDialogOpen(false);
      setNotes("");
      setSelectedRequest(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const openUpdateDialog = (request: any) => {
    setSelectedRequest(request);
    setNotes(request.notes || "");
    setDialogOpen(true);
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
      confirmed: "bg-green-500/20 text-green-500 border-green-500/30",
      cancelled: "bg-red-500/20 text-red-500 border-red-500/30",
    };
    const icons = {
      pending: AlertCircle,
      confirmed: CheckCircle,
      cancelled: XCircle,
    };
    const Icon = icons[status as keyof typeof icons];
    return (
      <Badge className={styles[status as keyof typeof styles]}>
        <Icon className="w-3 h-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const stats = {
    total: tourRequests?.length || 0,
    pending: tourRequests?.filter(r => r.status === "pending").length || 0,
    confirmed: tourRequests?.filter(r => r.status === "confirmed").length || 0,
    cancelled: tourRequests?.filter(r => r.status === "cancelled").length || 0,
  };

  return (
    <div className="min-h-screen bg-luxury-dark">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/admin")}
                size="sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-foreground">Tour Requests Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user?.email}</span>
              <Button variant="outline" onClick={handleSignOut} size="sm">
                Sign Out
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-card/50 border-border">
              <div className="text-2xl font-bold text-foreground">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Requests</div>
            </Card>
            <Card className="p-4 bg-card/50 border-border">
              <div className="text-2xl font-bold text-yellow-500">{stats.pending}</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </Card>
            <Card className="p-4 bg-card/50 border-border">
              <div className="text-2xl font-bold text-green-500">{stats.confirmed}</div>
              <div className="text-sm text-muted-foreground">Confirmed</div>
            </Card>
            <Card className="p-4 bg-card/50 border-border">
              <div className="text-2xl font-bold text-red-500">{stats.cancelled}</div>
              <div className="text-sm text-muted-foreground">Cancelled</div>
            </Card>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-6 flex gap-4 items-end">
          <div className="flex-1">
            <Label>Filter by Status</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tour Requests List */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">Loading tour requests...</div>
          </div>
        ) : tourRequests && tourRequests.length > 0 ? (
          <div className="grid gap-4">
            {tourRequests.map((request) => (
              <Card key={request.id} className="p-6 bg-card border-border hover:border-gold/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{request.property_title}</h3>
                      {getStatusBadge(request.status)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Requested {format(new Date(request.created_at), "PPP 'at' p")}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  {/* Visitor Details */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Visitor Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{request.visitor_name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${request.visitor_email}`} className="hover:text-gold">
                          {request.visitor_email}
                        </a>
                      </div>
                      {request.visitor_phone && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${request.visitor_phone}`} className="hover:text-gold">
                            {request.visitor_phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tour Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(request.tour_date), "PPP")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{request.tour_time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {request.tour_type === "video-chat" ? (
                          <Video className="w-4 h-4" />
                        ) : (
                          <MapPin className="w-4 h-4" />
                        )}
                        <span>
                          {request.tour_type === "video-chat" ? "Video Chat" : "In-Person"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {request.notes && (
                  <div className="mb-4 p-3 bg-muted/20 rounded-lg">
                    <div className="text-xs font-semibold text-muted-foreground mb-1">Notes:</div>
                    <div className="text-sm text-foreground">{request.notes}</div>
                  </div>
                )}

                <div className="flex gap-2">
                  {request.status === "pending" && (
                    <>
                      <Button
                        onClick={() => {
                          setSelectedRequest(request);
                          handleStatusUpdate(request.id, "confirmed");
                        }}
                        size="sm"
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Confirm
                      </Button>
                      <Button
                        onClick={() => openUpdateDialog(request)}
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  )}
                  {request.status !== "pending" && (
                    <Button
                      onClick={() => openUpdateDialog(request)}
                      size="sm"
                      variant="outline"
                    >
                      Update Notes
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center bg-card border-border">
            <div className="text-muted-foreground mb-2">No tour requests found</div>
            <div className="text-sm text-muted-foreground">
              {statusFilter !== "all" 
                ? `No ${statusFilter} requests at the moment`
                : "Tour requests will appear here when visitors book tours"}
            </div>
          </Card>
        )}
      </main>

      {/* Update Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Tour Request</DialogTitle>
            <DialogDescription>
              Add notes or change the status of this tour request
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any internal notes about this tour request..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div className="flex gap-2">
              {selectedRequest?.status !== "confirmed" && (
                <Button
                  onClick={() => handleStatusUpdate(selectedRequest?.id, "confirmed")}
                  className="flex-1 bg-green-500 hover:bg-green-600"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm
                </Button>
              )}
              {selectedRequest?.status !== "cancelled" && (
                <Button
                  onClick={() => handleStatusUpdate(selectedRequest?.id, "cancelled")}
                  variant="outline"
                  className="flex-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminTourRequests;