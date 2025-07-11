/*
  # Add comprehensive real estate listings

  1. Properties Added
    - DHA properties (various phases)
    - Bahria Town properties (Lahore & Rawalpindi)
    - Gulberg properties (commercial & residential)
    - Model Town properties
    - Johar Town properties
    - Wapda Town properties
    - Various property types (houses, plots, commercial)

  2. Features
    - Detailed property information
    - Multiple images per property
    - Comprehensive amenities
    - Nearby places and landmarks
    - Agent contact information
    - Competitive pricing
*/

INSERT INTO properties (
  title, location, price, original_price, size, type, bedrooms, bathrooms, parking, year_built,
  features, amenities, nearby_places, images, description, agent_name, agent_phone, agent_email
) VALUES
-- DHA Properties
(
  'Brand New Villa in DHA Phase 1',
  'DHA Phase 1, Lahore',
  '4.5 Crore',
  '4.8 Crore',
  '2 Kanal',
  'House',
  7,
  8,
  5,
  2023,
  ARRAY['Swimming Pool', 'Home Cinema', 'Gym', 'Servant Quarters', 'Generator', 'Solar System', 'Smart Home'],
  ARRAY['24/7 Security', 'Club Access', 'Parks', 'International Schools', 'Hospitals', 'Shopping'],
  ARRAY['DHA Golf Club - 500m', 'Packages Mall - 1.5km', 'Lahore Grammar School - 800m', 'Shaukat Khanum - 2km'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Magnificent brand new villa in DHA Phase 1 with luxury amenities and prime location. Perfect for families seeking premium lifestyle.',
  'Imtiaz Hussain',
  '+92 347 4269114',
  'imtiaz.winzventures@gmail.com'
),
(
  'Corner Plot in DHA Phase 3',
  'DHA Phase 3, Lahore',
  '2.2 Crore',
  '2.4 Crore',
  '1 Kanal',
  'Plot',
  0,
  0,
  0,
  NULL,
  ARRAY['Corner Plot', 'Park Facing', 'Wide Roads', 'Utilities Available', 'Possession Ready', 'NOC Clear'],
  ARRAY['Developed Area', 'Security', 'Parks', 'Schools Nearby', 'Commercial Areas'],
  ARRAY['DHA Sports Club - 1km', 'Y Block Market - 500m', 'Beaconhouse School - 600m'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Premium corner plot in DHA Phase 3 with excellent investment potential and ready for construction.',
  'Ahmed Hassan',
  '+92 300 1234567',
  'ahmed@winzventures.com'
),
(
  'Penthouse in DHA Phase 4',
  'DHA Phase 4, Lahore',
  '1.8 Crore',
  '2.0 Crore',
  '8 Marla',
  'House',
  4,
  5,
  3,
  2022,
  ARRAY['Rooftop Terrace', 'Elevator', 'Central AC', 'Modern Kitchen', 'Walk-in Closets', 'Balconies'],
  ARRAY['Gated Community', 'Gym', 'Swimming Pool', 'Community Center', 'Security'],
  ARRAY['DHA Main Boulevard - 200m', 'Fortress Stadium - 800m', 'Lahore American School - 1km'],
  ARRAY['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Stunning penthouse in DHA Phase 4 with panoramic city views and modern amenities.',
  'Fatima Khan',
  '+92 301 2345678',
  'fatima@winzventures.com'
),

-- Bahria Town Properties
(
  'Family Home in Bahria Town Phase 2',
  'Bahria Town Phase 2, Lahore',
  '1.5 Crore',
  '1.65 Crore',
  '10 Marla',
  'House',
  5,
  5,
  3,
  2021,
  ARRAY['Modern Design', 'Landscaped Garden', 'Servant Quarter', 'Study Room', 'Prayer Room'],
  ARRAY['Gated Community', 'Parks', 'Mosque', 'Schools', 'Shopping Areas', 'Security'],
  ARRAY['Bahria University - 1.5km', 'Grand Mosque - 800m', 'Commercial Area - 500m'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Beautiful family home in Bahria Town Phase 2 with excellent community facilities and peaceful environment.',
  'Ali Raza',
  '+92 302 3456789',
  'ali@winzventures.com'
),
(
  'Luxury Mansion in Bahria Town Sector C',
  'Bahria Town Sector C, Rawalpindi',
  '6.5 Crore',
  '7.0 Crore',
  '2 Kanal',
  'House',
  8,
  10,
  6,
  2020,
  ARRAY['Private Pool', 'Guest House', 'Home Theater', 'Wine Cellar', 'Gym', 'Sauna', 'Jacuzzi'],
  ARRAY['Golf Course Access', 'Club Membership', 'International Schools', 'Hospital', 'Shopping Mall'],
  ARRAY['Bahria Golf Club - 300m', 'Bahria International Hospital - 1km', 'Bahria University - 2km'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Spectacular luxury mansion in Bahria Town with world-class amenities and golf course views.',
  'Hassan Ali',
  '+92 303 4567890',
  'hassan@winzventures.com'
),
(
  'Commercial Plot in Bahria Town Commercial',
  'Bahria Town Commercial, Lahore',
  '3.8 Crore',
  '4.2 Crore',
  '8 Marla',
  'Commercial',
  0,
  0,
  0,
  NULL,
  ARRAY['Main Boulevard', 'Corner Location', 'High Traffic', 'Commercial Zone', 'Investment Opportunity'],
  ARRAY['Prime Location', 'Easy Access', 'Parking Available', 'Security', 'Utilities'],
  ARRAY['Bahria Town Main Gate - 500m', 'Commercial Hub - 100m', 'Restaurants - 200m'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Prime commercial plot in Bahria Town with excellent business potential and high foot traffic.',
  'Ayesha Malik',
  '+92 307 8901234',
  'ayesha@winzventures.com'
),

-- Gulberg Properties
(
  'Modern Apartment in Gulberg II',
  'Gulberg II, Lahore',
  '75 Lac',
  '85 Lac',
  '5 Marla',
  'House',
  3,
  3,
  2,
  2022,
  ARRAY['Modern Kitchen', 'Balcony', 'Fitted Wardrobes', 'Tiles Flooring', 'Gas Connection'],
  ARRAY['Central Location', 'Markets Nearby', 'Restaurants', 'Easy Transport', 'Security'],
  ARRAY['MM Alam Road - 300m', 'Liberty Market - 800m', 'Packages Mall - 1.5km'],
  ARRAY['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Modern apartment in the heart of Gulberg with excellent connectivity and urban lifestyle.',
  'Bilal Ahmed',
  '+92 308 9012345',
  'bilal@winzventures.com'
),
(
  'Commercial Building in Gulberg III',
  'Gulberg III, Lahore',
  '8.5 Crore',
  '9.0 Crore',
  '20 Marla',
  'Commercial',
  0,
  12,
  15,
  2019,
  ARRAY['Ground + 4 Floors', 'Elevators', 'Central AC', 'Conference Rooms', 'Cafeteria'],
  ARRAY['Business District', 'Banks', 'Restaurants', 'Metro Access', 'Parking'],
  ARRAY['Main Boulevard - 50m', 'Liberty Roundabout - 400m', 'Hafeez Center - 600m'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Premium commercial building in Gulberg III perfect for corporate offices and business centers.',
  'Zara Khan',
  '+92 309 0123456',
  'zara@winzventures.com'
),

-- Model Town Properties
(
  'Heritage House in Model Town Extension',
  'Model Town Extension, Lahore',
  '2.8 Crore',
  '3.0 Crore',
  '1.5 Kanal',
  'House',
  6,
  6,
  4,
  2018,
  ARRAY['Heritage Design', 'Large Garden', 'Servant Quarters', 'Study', 'Prayer Room', 'Store Room'],
  ARRAY['Established Area', 'Parks', 'Schools', 'Hospitals', 'Markets', 'Transport'],
  ARRAY['Model Town Park - 200m', 'University of Punjab - 1km', 'Services Hospital - 800m'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Beautiful heritage house in Model Town Extension with classic architecture and modern amenities.',
  'Sana Ahmed',
  '+92 304 5678901',
  'sana@winzventures.com'
),

-- Johar Town Properties
(
  'Contemporary Villa in Johar Town Phase 1',
  'Johar Town Phase 1, Lahore',
  '2.2 Crore',
  '2.4 Crore',
  '1 Kanal',
  'House',
  5,
  6,
  3,
  2021,
  ARRAY['Contemporary Design', 'Swimming Pool', 'Gym', 'Home Office', 'Guest Room', 'Terrace'],
  ARRAY['Gated Community', 'Parks', 'Schools', 'Shopping Centers', 'Mosque', 'Security'],
  ARRAY['Emporium Mall - 2km', 'University of Management Sciences - 1.5km', 'Expo Center - 3km'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Stunning contemporary villa in Johar Town Phase 1 with modern amenities and excellent location.',
  'Tariq Hassan',
  '+92 305 6789012',
  'tariq@winzventures.com'
),
(
  'Residential Plot in Johar Town Phase 2',
  'Johar Town Phase 2, Lahore',
  '1.1 Crore',
  '1.2 Crore',
  '10 Marla',
  'Plot',
  0,
  0,
  0,
  NULL,
  ARRAY['Developed Area', 'Wide Roads', 'Utilities Available', 'Park Facing', 'Investment Opportunity'],
  ARRAY['Planned Community', 'Security', 'Parks', 'Schools Nearby', 'Commercial Areas'],
  ARRAY['Johar Town Market - 800m', 'UMT University - 1km', 'Ring Road - 2km'],
  ARRAY['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Excellent residential plot in Johar Town Phase 2 with great development potential.',
  'Usman Khan',
  '+92 306 7890123',
  'usman@winzventures.com'
),

-- Wapda Town Properties
(
  'Family House in Wapda Town Phase 1',
  'Wapda Town Phase 1, Lahore',
  '1.6 Crore',
  '1.75 Crore',
  '10 Marla',
  'House',
  4,
  4,
  2,
  2020,
  ARRAY['Modern Kitchen', 'Lawn', 'Servant Quarter', 'Store Room', 'Covered Parking'],
  ARRAY['Peaceful Environment', 'Parks', 'Schools', 'Mosque', 'Markets', 'Transport'],
  ARRAY['Wapda Town Market - 500m', 'Lahore Cantt - 2km', 'Mall Road - 3km'],
  ARRAY['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Comfortable family house in Wapda Town Phase 1 with peaceful environment and good connectivity.',
  'Nadia Ali',
  '+92 310 1234567',
  'nadia@winzventures.com'
),

-- Cantt Properties
(
  'Colonial Style Bungalow in Lahore Cantt',
  'Lahore Cantt, Lahore',
  '3.5 Crore',
  '3.8 Crore',
  '1.5 Kanal',
  'House',
  6,
  7,
  4,
  2017,
  ARRAY['Colonial Architecture', 'Large Verandas', 'Mature Garden', 'Servant Quarters', 'Generator'],
  ARRAY['Prestigious Area', 'Security', 'Golf Club Access', 'Schools', 'Hospitals'],
  ARRAY['Lahore Gymkhana - 800m', 'Mall Road - 1km', 'Railway Station - 2km'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Magnificent colonial style bungalow in prestigious Lahore Cantt with heritage charm.',
  'Kamran Shah',
  '+92 311 2345678',
  'kamran@winzventures.com'
),

-- Islamabad Properties
(
  'Modern House in DHA Phase 2 Islamabad',
  'DHA Phase 2, Islamabad',
  '2.8 Crore',
  '3.0 Crore',
  '1 Kanal',
  'House',
  5,
  6,
  3,
  2022,
  ARRAY['Modern Architecture', 'Smart Home System', 'Solar Panels', 'Landscaped Garden', 'Security System'],
  ARRAY['Gated Community', 'Club Access', 'International Schools', 'Shopping Mall', 'Hospital'],
  ARRAY['DHA Club - 500m', 'Safa Gold Mall - 1km', 'Islamabad Airport - 15km'],
  ARRAY['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Ultra-modern house in DHA Islamabad with smart home features and premium location.',
  'Farah Ahmed',
  '+92 312 3456789',
  'farah@winzventures.com'
),
(
  'Luxury Apartment in Gulberg Greens Islamabad',
  'Gulberg Greens, Islamabad',
  '1.4 Crore',
  '1.55 Crore',
  '8 Marla',
  'House',
  3,
  4,
  2,
  2023,
  ARRAY['High-rise Living', 'City Views', 'Modern Amenities', 'Balcony', 'Central AC'],
  ARRAY['Swimming Pool', 'Gym', 'Community Center', 'Security', 'Maintenance'],
  ARRAY['Blue Area - 5km', 'F-6 Markaz - 2km', 'Centaurus Mall - 3km'],
  ARRAY['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'],
  'Luxury apartment in Gulberg Greens with stunning city views and modern amenities.',
  'Adnan Khan',
  '+92 313 4567890',
  'adnan@winzventures.com'
);