-- Drop existing policies on tour_requests
DROP POLICY IF EXISTS "Admins and agents can view tour requests" ON public.tour_requests;
DROP POLICY IF EXISTS "Admins and agents can update tour requests" ON public.tour_requests;

-- Create stricter policies: only admins can view and update tour requests
CREATE POLICY "Only admins can view tour requests" 
ON public.tour_requests 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update tour requests" 
ON public.tour_requests 
FOR UPDATE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));