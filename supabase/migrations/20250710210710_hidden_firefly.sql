/*
  # Add more sample properties for better showcase

  1. Additional Properties
    - More DHA properties
    - Bahria Town properties
    - Gulberg properties
    - Model Town properties
    - Commercial properties
*/

INSERT INTO properties (
  title, location, price, original_price, size, type, bedrooms, bathrooms, parking, year_built,
  features, amenities, nearby_places, images, description, agent_name, agent_phone, agent_email
) VALUES
(
  'Executive Apartment in DHA Phase 6',
  'DHA Phase 6, Lahore',
  '1.2 Crore',
  '1.35 Crore',
  '7 Marla',
  'House',
  4,
  4,
  2,
  2021,
  ARRAY['Elevator', 'Gym', 'Rooftop Terrace', 'Central AC', 'Security System', 'Backup Generator'],
  ARRAY['24/7 Security', 'Gym Facility', 'Community Center', 'Children Play Area', 'Mosque'],
  ARRAY['DHA Sports Club - 1km', 'Emporium Mall - 2km', 'Lahore Grammar School - 800m'],
  ARRAY['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Modern executive apartment in DHA Phase 6 with premium amenities and excellent location.',
  'Sana Ahmed',
  '+92 304 5678901',
  'sana@winzventures.com'
),
(
  'Luxury Bungalow in Bahria Town Phase 4',
  'Bahria Town Phase 4, Rawalpindi',
  '3.2 Crore',
  '3.5 Crore',
  '1.5 Kanal',
  'House',
  6,
  7,
  4,
  2019,
  ARRAY['Swimming Pool', 'Jacuzzi', 'Home Theater', 'Wine Cellar', 'Smart Home System', 'Solar Panels'],
  ARRAY['Gated Community', 'Golf Course Access', 'International Schools', 'Shopping Mall', 'Hospital'],
  ARRAY['Bahria Golf Club - 500m', 'Bahria University - 2km', 'Grand Mosque - 1km'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Spectacular luxury bungalow in Bahria Town with world-class amenities and prime location.',
  'Tariq Hassan',
  '+92 305 6789012',
  'tariq@winzventures.com'
),
(
  'Commercial Plaza in Gulberg Main Market',
  'Gulberg Main Market, Lahore',
  '5.5 Crore',
  '6.0 Crore',
  '15 Marla',
  'Commercial',
  0,
  8,
  10,
  2018,
  ARRAY['Ground + 3 Floors', 'Elevator', 'Central AC', 'Backup Generator', 'Fire Safety System'],
  ARRAY['Prime Location', 'High Foot Traffic', 'Parking Facility', 'Security', 'Maintenance'],
  ARRAY['MM Alam Road - 200m', 'Liberty Market - 300m', 'Packages Mall - 1km'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Prime commercial plaza in the heart of Gulberg with excellent rental potential.',
  'Usman Khan',
  '+92 306 7890123',
  'usman@winzventures.com'
),
(
  'Residential Plot in Bahria Town Phase 8',
  'Bahria Town Phase 8, Rawalpindi',
  '95 Lac',
  '1.05 Crore',
  '10 Marla',
  'Plot',
  0,
  0,
  0,
  NULL,
  ARRAY['Corner Plot', 'Park Facing', 'Wide Road', 'Utilities Available', 'Possession Ready'],
  ARRAY['Gated Community', 'Security', 'Parks', 'Schools', 'Shopping Areas'],
  ARRAY['Bahria Icon Tower - 1km', 'Bahria Enclave - 2km', 'GT Road - 3km'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Premium residential plot in Bahria Town Phase 8 with excellent development potential.',
  'Ayesha Malik',
  '+92 307 8901234',
  'ayesha@winzventures.com'
),
(
  'Modern House in Model Town',
  'Model Town Block B, Lahore',
  '1.8 Crore',
  '2.0 Crore',
  '10 Marla',
  'House',
  5,
  5,
  3,
  2020,
  ARRAY['Modern Kitchen', 'Study Room', 'Servant Quarter', 'Terrace Garden', 'Solar System'],
  ARRAY['Established Area', 'Parks Nearby', 'Schools', 'Hospitals', 'Shopping Centers'],
  ARRAY['Model Town Park - 300m', 'University of Punjab - 2km', 'Services Hospital - 1.5km'],
  ARRAY['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Beautiful modern house in the prestigious Model Town area with all modern amenities.',
  'Bilal Ahmed',
  '+92 308 9012345',
  'bilal@winzventures.com'
),
(
  'Office Building in DHA Phase 2',
  'DHA Phase 2, Lahore',
  '4.2 Crore',
  '4.5 Crore',
  '12 Marla',
  'Commercial',
  0,
  6,
  8,
  2017,
  ARRAY['Ground + 2 Floors', 'Conference Rooms', 'Reception Area', 'Cafeteria', 'Parking'],
  ARRAY['Business District', 'Banks Nearby', 'Restaurants', 'Easy Access', 'Security'],
  ARRAY['DHA Main Boulevard - 100m', 'Fortress Stadium - 1km', 'Packages Mall - 2km'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Professional office building in DHA Phase 2 perfect for corporate headquarters.',
  'Zara Khan',
  '+92 309 0123456',
  'zara@winzventures.com'
);