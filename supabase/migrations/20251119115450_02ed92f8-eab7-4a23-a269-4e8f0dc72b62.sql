-- Create tour_requests table
CREATE TABLE public.tour_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
  property_title TEXT NOT NULL,
  visitor_name TEXT NOT NULL,
  visitor_email TEXT NOT NULL,
  visitor_phone TEXT,
  tour_date DATE NOT NULL,
  tour_time TEXT NOT NULL,
  tour_type TEXT NOT NULL CHECK (tour_type IN ('in-person', 'video-chat')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tour_requests ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (visitors can book tours without login)
CREATE POLICY "Anyone can create tour requests"
ON public.tour_requests
FOR INSERT
WITH CHECK (true);

-- Authenticated users (agents) can view all tour requests
CREATE POLICY "Authenticated users can view tour requests"
ON public.tour_requests
FOR SELECT
USING (auth.role() = 'authenticated');

-- Authenticated users can update tour requests (for status changes)
CREATE POLICY "Authenticated users can update tour requests"
ON public.tour_requests
FOR UPDATE
USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX idx_tour_requests_property_id ON public.tour_requests(property_id);
CREATE INDEX idx_tour_requests_tour_date ON public.tour_requests(tour_date);
CREATE INDEX idx_tour_requests_status ON public.tour_requests(status);