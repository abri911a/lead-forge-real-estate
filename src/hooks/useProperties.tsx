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
  propertyType?: string;
}

export const useProperties = ({
  page = 1,
  pageSize = 9,
  featured,
  location,
  propertyType,
}: UsePropertiesOptions = {}) => {
  return useQuery({
    queryKey: ["properties", page, pageSize, featured, location, propertyType],
    queryFn: async () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      let query = supabase
        .from("properties")
        .select("*", { count: "exact" })
        .order("updated_at", { ascending: false })
        .range(from, to);

      if (featured !== undefined) {
        query = query.eq("featured", featured);
      }

      if (location && location !== "all") {
        query = query.ilike("location", `%${location}%`);
      }

      if (propertyType && propertyType !== "all") {
        query = query.ilike("property_type", `%${propertyType}%`);
      }

      const { data, error, count } = await query;

      if (error) throw error;

      // Sort properties by completeness (more details first)
      const sortedData = (data || []).sort((a, b) => {
        const scoreA = calculateCompletenessScore(a);
        const scoreB = calculateCompletenessScore(b);
        return scoreB - scoreA;
      });

      return {
        properties: sortedData as Property[],
        totalCount: count || 0,
        totalPages: Math.ceil((count || 0) / pageSize),
      };
    },
  });
};

// Calculate how complete a property's details are
function calculateCompletenessScore(property: any): number {
  let score = 0;
  
  // Description adds significant value
  if (property.description && property.description.length > 100) score += 5;
  else if (property.description) score += 2;
  
  // Year built is important
  if (property.year_built) score += 3;
  
  // Features array
  if (property.features && Array.isArray(property.features) && property.features.length > 0) {
    score += Math.min(property.features.length, 5); // Max 5 points for features
  }
  
  // Price numeric (validated price)
  if (property.price_numeric) score += 2;
  
  // Status indicates active management
  if (property.status && property.status !== 'Available') score += 1;
  
  // Featured properties get priority
  if (property.featured) score += 3;
  
  return score;
}
