import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface TourRequest {
  id: string;
  property_id: string;
  property_title: string;
  visitor_name: string;
  visitor_email: string;
  visitor_phone: string | null;
  tour_date: string;
  tour_time: string;
  tour_type: "in-person" | "video-chat";
  status: "pending" | "confirmed" | "cancelled";
  notes: string | null;
  created_at: string;
}

interface UseTourRequestsOptions {
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  propertyId?: string;
}

export const useTourRequests = (options: UseTourRequestsOptions = {}) => {
  return useQuery({
    queryKey: ["tour-requests", options],
    queryFn: async () => {
      let query = supabase
        .from("tour_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (options.status && options.status !== "all") {
        query = query.eq("status", options.status);
      }

      if (options.dateFrom) {
        query = query.gte("tour_date", options.dateFrom);
      }

      if (options.dateTo) {
        query = query.lte("tour_date", options.dateTo);
      }

      if (options.propertyId && options.propertyId !== "all") {
        query = query.eq("property_id", options.propertyId);
      }

      const { data, error } = await query;

      if (error) throw error;

      return data as TourRequest[];
    },
  });
};

export const useUpdateTourRequestStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status, notes }: { id: string; status: string; notes?: string }) => {
      const updateData: any = { status };
      if (notes !== undefined) {
        updateData.notes = notes;
      }

      const { error } = await supabase
        .from("tour_requests")
        .update(updateData)
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tour-requests"] });
    },
  });
};