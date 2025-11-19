import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Property {
  id: string;
  title: string;
  description: string | null;
  location: string;
  price: string;
  price_numeric: number | null;
  beds: number;
  baths: number;
  sqft: string;
  property_type: string;
  status: string | null;
  year_built: number | null;
  image_url: string;
  features: string[] | null;
  featured: boolean | null;
  created_at: string;
  updated_at: string;
}

interface UsePropertiesOptions {
  page?: number;
  pageSize?: number;
  featured?: boolean;
  location?: string;
}

export const useProperties = ({
  page = 1,
  pageSize = 9,
  featured,
  location,
}: UsePropertiesOptions = {}) => {
  return useQuery({
    queryKey: ["properties", page, pageSize, featured, location],
    queryFn: async () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      let query = supabase
        .from("properties")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(from, to);

      if (featured !== undefined) {
        query = query.eq("featured", featured);
      }

      if (location && location !== "all") {
        query = query.ilike("location", `%${location}%`);
      }

      const { data, error, count } = await query;

      if (error) throw error;

      return {
        properties: (data || []) as Property[],
        totalCount: count || 0,
        totalPages: Math.ceil((count || 0) / pageSize),
      };
    },
  });
};
