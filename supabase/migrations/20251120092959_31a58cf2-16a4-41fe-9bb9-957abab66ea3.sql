-- Create table for rate limiting tour requests
CREATE TABLE IF NOT EXISTS public.tour_request_rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier TEXT NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for efficient lookups
CREATE INDEX IF NOT EXISTS idx_tour_rate_limits_identifier ON public.tour_request_rate_limits(identifier, window_start);

-- Enable RLS
ALTER TABLE public.tour_request_rate_limits ENABLE ROW LEVEL SECURITY;

-- Only system/service role can manage rate limits (no user access needed)
CREATE POLICY "Service role can manage rate limits"
ON public.tour_request_rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);