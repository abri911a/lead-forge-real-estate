-- Create properties table to store all real estate listings
CREATE TABLE public.properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  price TEXT NOT NULL,
  price_numeric DECIMAL(12, 2),
  beds INTEGER NOT NULL,
  baths INTEGER NOT NULL,
  sqft TEXT NOT NULL,
  property_type TEXT NOT NULL,
  status TEXT DEFAULT 'Available',
  year_built INTEGER,
  image_url TEXT NOT NULL,
  features JSONB DEFAULT '[]'::jsonb,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_properties_location ON public.properties(location);
CREATE INDEX idx_properties_type ON public.properties(property_type);
CREATE INDEX idx_properties_price ON public.properties(price_numeric);
CREATE INDEX idx_properties_featured ON public.properties(featured);

-- Enable Row Level Security
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (properties are public listings)
CREATE POLICY "Properties are publicly readable"
  ON public.properties
  FOR SELECT
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_properties_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON public.properties
  FOR EACH ROW
  EXECUTE FUNCTION public.update_properties_updated_at();