/*
  # Fix Silazaar spelling in database

  1. Updates
    - Update testimonials table to correct "Silazaar" spelling
    - Fix any references to the brand name in existing data

  2. Changes
    - Correct testimonial content that mentions "Silazaar products"
*/

-- Update testimonial content to fix Silazaar spelling
UPDATE testimonials 
SET content = 'Silazaar products are exceptional. The quality and craftsmanship exceed our expectations every time.'
WHERE name = 'James Wilson' 
AND role = 'Wholesale Partner' 
AND company = 'Artisan Collective UK';