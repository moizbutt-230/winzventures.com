/*
  # Create properties table

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `title` (text)
      - `location` (text)
      - `price` (text)
      - `original_price` (text, optional)
      - `size` (text)
      - `type` (text)
      - `bedrooms` (integer, optional)
      - `bathrooms` (integer, optional)
      - `parking` (integer, optional)
      - `year_built` (integer, optional)
      - `features` (text array)
      - `amenities` (text array)
      - `nearby_places` (text array)
      - `images` (text array)
      - `description` (text)
      - `agent_name` (text)
      - `agent_phone` (text)
      - `agent_email` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `properties` table
    - Add policy for public read access
    - Add policy for authenticated users to manage properties
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  location text NOT NULL,
  price text NOT NULL,
  original_price text,
  size text NOT NULL,
  type text NOT NULL CHECK (type IN ('House', 'Plot', 'Commercial')),
  bedrooms integer,
  bathrooms integer,
  parking integer,
  year_built integer,
  features text[] DEFAULT '{}',
  amenities text[] DEFAULT '{}',
  nearby_places text[] DEFAULT '{}',
  images text[] DEFAULT '{}',
  description text NOT NULL,
  agent_name text NOT NULL,
  agent_phone text NOT NULL,
  agent_email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Properties are viewable by everyone"
  ON properties
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON properties
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();