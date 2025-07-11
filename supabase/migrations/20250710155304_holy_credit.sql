/*
  # Seed sample data

  1. Sample Properties
  2. Sample Blog Posts
  3. Sample Testimonials
*/

-- Insert sample properties
INSERT INTO properties (
  title, location, price, original_price, size, type, bedrooms, bathrooms, parking, year_built,
  features, amenities, nearby_places, images, description, agent_name, agent_phone, agent_email
) VALUES
(
  'Luxury Villa in DHA Phase 5',
  'DHA Phase 5, Lahore',
  '2.5 Crore',
  '2.8 Crore',
  '1 Kanal',
  'House',
  5,
  6,
  3,
  2020,
  ARRAY['Swimming Pool', 'Garden', 'Servant Quarters', 'Generator', 'Security System', 'Marble Flooring'],
  ARRAY['24/7 Security', 'Power Backup', 'Water Filtration', 'Landscaped Garden', 'Modern Kitchen', 'Master Suite'],
  ARRAY['DHA Golf Club - 2km', 'Packages Mall - 3km', 'American School - 1.5km', 'Shaukat Khanum Hospital - 4km'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'This stunning luxury villa in DHA Phase 5 offers the perfect blend of modern amenities and traditional elegance. Located in one of Lahore''s most prestigious neighborhoods, this property features spacious rooms, high-end finishes, and beautiful landscaping.',
  'Ahmed Hassan',
  '+92 300 1234567',
  'ahmed@winzventures.com'
),
(
  'Modern Apartment in Bahria Town',
  'Bahria Town, Rawalpindi',
  '85 Lac',
  '95 Lac',
  '5 Marla',
  'House',
  3,
  3,
  2,
  2019,
  ARRAY['Balcony', 'Fitted Kitchen', 'Wardrobes', 'Tiles Flooring', 'Gas Connection'],
  ARRAY['Gated Community', 'Parks', 'Shopping Areas', 'Schools Nearby', 'Mosque'],
  ARRAY['Bahria University - 1km', 'Centaurus Mall - 5km', 'Islamabad Airport - 20km'],
  ARRAY['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Beautiful modern apartment in the heart of Bahria Town with all essential amenities and excellent connectivity.',
  'Fatima Khan',
  '+92 301 2345678',
  'fatima@winzventures.com'
),
(
  'Commercial Plot in Gulberg',
  'Gulberg III, Lahore',
  '1.8 Crore',
  '2.0 Crore',
  '10 Marla',
  'Commercial',
  0,
  0,
  0,
  NULL,
  ARRAY['Main Road', 'Corner Plot', 'High Traffic Area', 'Commercial Zone', 'Utilities Available'],
  ARRAY['Main Road Access', 'Corner Location', 'Commercial Zoning', 'High Visibility'],
  ARRAY['MM Alam Road - 500m', 'Liberty Market - 1km', 'Packages Mall - 2km'],
  ARRAY['https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Prime commercial plot located on the main road in Gulberg III. Perfect for retail, office, or mixed-use development.',
  'Ali Raza',
  '+92 302 3456789',
  'ali@winzventures.com'
),
(
  'Residential Plot in DHA Phase 8',
  'DHA Phase 8, Islamabad',
  '1.2 Crore',
  '1.3 Crore',
  '8 Marla',
  'Plot',
  0,
  0,
  0,
  NULL,
  ARRAY['Developed Area', 'Utilities Available', 'Park Facing', 'Wide Road', 'Possession Ready'],
  ARRAY['Gated Community', 'Security', 'Parks', 'Schools Nearby'],
  ARRAY['DHA Club - 1km', 'Safa Gold Mall - 2km', 'Islamabad Airport - 10km'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Excellent residential plot in DHA Phase 8 with all modern facilities and great investment potential.',
  'Hassan Ali',
  '+92 303 4567890',
  'hassan@winzventures.com'
);

-- Insert sample blog posts
INSERT INTO blog_posts (
  title, excerpt, content, category, author, published_date, image, read_time
) VALUES
(
  'Global Trade Trends in 2024: Opportunities for Pakistani Exporters',
  'Explore the latest trends in international trade and how Pakistani businesses can capitalize on emerging opportunities.',
  'The global trade landscape is evolving rapidly, presenting new opportunities for Pakistani exporters. This comprehensive analysis covers emerging markets, digital trade platforms, and strategic partnerships that can drive export growth.',
  'Trading',
  'Imtiaz Hussain',
  '2024-01-15',
  'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
  '5 min read'
),
(
  'Real Estate Investment Guide: DHA vs Bahria Town',
  'A comprehensive comparison of investment opportunities in Pakistan''s premier housing societies.',
  'Choosing between DHA and Bahria Town for real estate investment requires careful consideration of multiple factors including location, amenities, appreciation potential, and rental yields.',
  'Real Estate',
  'Imtiaz Hussain',
  '2024-01-10',
  'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
  '8 min read'
),
(
  'The Art of Pakistani Woodcraft: Preserving Traditional Skills',
  'Discover the rich heritage of Pakistani handicrafts and how traditional skills are being preserved for future generations.',
  'Pakistani woodcraft represents centuries of artistic tradition. Our artisans combine time-honored techniques with contemporary design to create pieces that appeal to international markets.',
  'Handicrafts',
  'Imtiaz Hussain',
  '2024-01-05',
  'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
  '6 min read'
);

-- Insert sample testimonials
INSERT INTO testimonials (name, role, company, content, rating) VALUES
(
  'Ahmed Hassan',
  'Import Partner',
  'Global Trading Co.',
  'WINZ Ventures has been instrumental in expanding our business internationally. Their expertise and reliability are unmatched.',
  5
),
(
  'Sarah Khan',
  'Real Estate Client',
  'Property Investments Ltd.',
  'Found my dream home through WINZ Ventures. Their property consultation service is exceptional and professional.',
  5
),
(
  'Michael Johnson',
  'International Buyer',
  'European Imports Inc.',
  'The quality of Silazaar handicrafts is outstanding. Perfect for our retail chain in Europe.',
  5
),
(
  'Fatima Ahmed',
  'Technology Client',
  'Tech Solutions Pakistan',
  'Their AI solutions transformed our business operations. Highly recommend their technology services.',
  5
),
(
  'James Wilson',
  'Wholesale Partner',
  'Artisan Collective UK',
  'Silazaar products are exceptional. The quality and craftsmanship exceed our expectations every time.',
  5
);