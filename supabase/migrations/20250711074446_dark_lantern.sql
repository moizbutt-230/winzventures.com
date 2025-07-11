/*
  # Fix Contact Inquiries RLS Policy

  1. Security Update
    - Add policy to allow anonymous users to insert contact inquiries
    - This enables the public contact form to work properly
    
  2. Changes
    - Create INSERT policy for anonymous users on contact_inquiries table
    - Allow public users to submit contact forms without authentication
*/

-- Create policy to allow anonymous users to insert contact inquiries
CREATE POLICY "Allow anonymous users to submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);