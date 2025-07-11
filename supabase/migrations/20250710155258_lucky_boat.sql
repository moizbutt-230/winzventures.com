/*
  # Create inquiry tables

  1. New Tables
    - `wholesale_inquiries`
      - `id` (uuid, primary key)
      - `company_name` (text)
      - `contact_person` (text)
      - `email` (text)
      - `phone` (text)
      - `country` (text)
      - `business_type` (text)
      - `product_interest` (text)
      - `order_quantity` (text, optional)
      - `message` (text, optional)
      - `hear_about_us` (text, optional)
      - `status` (text)
      - `created_at` (timestamp)

    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `subject` (text)
      - `message` (text)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage inquiries
*/

CREATE TABLE IF NOT EXISTS wholesale_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  business_type text NOT NULL,
  product_interest text NOT NULL,
  order_quantity text,
  message text,
  hear_about_us text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'responded', 'closed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wholesale_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can manage wholesale inquiries"
  ON wholesale_inquiries
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage contact inquiries"
  ON contact_inquiries
  FOR ALL
  TO authenticated
  USING (true);