/*
  # Allow Public Contact Form Submissions

  1. Security Changes
    - Drop existing restrictive policies on contact_inquiries table
    - Add new policy to allow anyone (including anonymous users) to submit contact forms
    - Maintain read/update restrictions for authenticated users only

  2. Policy Details
    - Allow INSERT for both authenticated and anonymous users
    - Allow SELECT/UPDATE/DELETE only for authenticated users (admin access)
    - Ensures public can submit but only admins can manage inquiries
*/

-- Drop existing policies that might be blocking anonymous submissions
DROP POLICY IF EXISTS "Allow anonymous users to submit contact inquiries" ON contact_inquiries;
DROP POLICY IF EXISTS "Authenticated users can manage contact inquiries" ON contact_inquiries;

-- Create new policy that allows anyone to submit contact forms
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Keep admin management restricted to authenticated users
CREATE POLICY "Authenticated users can manage contact inquiries"
  ON contact_inquiries
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);