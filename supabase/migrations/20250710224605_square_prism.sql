/*
  # Create Silazaar products table

  1. New Tables
    - `silazaar_products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text)
      - `subcategory` (text, optional)
      - `description` (text)
      - `detailed_description` (text, optional)
      - `sku` (text, unique)
      - `wholesale_price` (decimal)
      - `retail_price` (decimal, optional)
      - `minimum_order_quantity` (integer)
      - `stock_quantity` (integer)
      - `dimensions` (jsonb) - length, width, height, weight
      - `materials` (text array)
      - `colors_available` (text array)
      - `finishes_available` (text array)
      - `images` (text array)
      - `features` (text array)
      - `care_instructions` (text)
      - `production_time_days` (integer)
      - `is_customizable` (boolean)
      - `is_active` (boolean)
      - `is_featured` (boolean)
      - `export_ready` (boolean)
      - `certifications` (text array)
      - `tags` (text array)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `silazaar_products` table
    - Add policy for public read access
    - Add policy for authenticated users to manage products
*/

CREATE TABLE IF NOT EXISTS silazaar_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL CHECK (category IN ('Furniture', 'Home Decor', 'Kitchenware', 'Accessories', 'Garden & Outdoor', 'Custom')),
  subcategory text,
  description text NOT NULL,
  detailed_description text,
  sku text UNIQUE NOT NULL,
  wholesale_price decimal(10,2) NOT NULL,
  retail_price decimal(10,2),
  minimum_order_quantity integer NOT NULL DEFAULT 50,
  stock_quantity integer NOT NULL DEFAULT 0,
  dimensions jsonb DEFAULT '{}', -- {length: 0, width: 0, height: 0, weight: 0, unit: "cm/kg"}
  materials text[] DEFAULT '{}',
  colors_available text[] DEFAULT '{}',
  finishes_available text[] DEFAULT '{}',
  images text[] DEFAULT '{}',
  features text[] DEFAULT '{}',
  care_instructions text,
  production_time_days integer DEFAULT 30,
  is_customizable boolean DEFAULT false,
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  export_ready boolean DEFAULT true,
  certifications text[] DEFAULT '{}',
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE silazaar_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Silazaar products are viewable by everyone"
  ON silazaar_products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage Silazaar products"
  ON silazaar_products
  FOR ALL
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_silazaar_products_updated_at
  BEFORE UPDATE ON silazaar_products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_silazaar_products_category ON silazaar_products(category);
CREATE INDEX idx_silazaar_products_sku ON silazaar_products(sku);
CREATE INDEX idx_silazaar_products_active ON silazaar_products(is_active);
CREATE INDEX idx_silazaar_products_featured ON silazaar_products(is_featured);
CREATE INDEX idx_silazaar_products_export_ready ON silazaar_products(export_ready);

-- Insert sample Silazaar products
INSERT INTO silazaar_products (
  name, category, subcategory, description, detailed_description, sku, wholesale_price, retail_price,
  minimum_order_quantity, stock_quantity, dimensions, materials, colors_available, finishes_available,
  features, care_instructions, production_time_days, is_customizable, is_featured, export_ready,
  certifications, tags
) VALUES
(
  'Handcrafted Wooden Dining Set',
  'Furniture',
  'Dining Room',
  'Exquisite 6-seater dining set crafted from premium Pakistani sheesham wood',
  'This stunning dining set features traditional Pakistani craftsmanship with modern design elements. Each piece is hand-carved by master artisans using time-honored techniques passed down through generations. The set includes one dining table and six matching chairs with comfortable cushioned seats.',
  'SLZ-FUR-DS-001',
  850.00,
  1200.00,
  10,
  25,
  '{"table": {"length": 180, "width": 90, "height": 75}, "chair": {"length": 45, "width": 45, "height": 95}, "unit": "cm", "weight": 85, "weight_unit": "kg"}',
  ARRAY['Sheesham Wood', 'Fabric Cushions', 'Brass Hardware'],
  ARRAY['Natural Wood', 'Dark Walnut', 'Honey Oak'],
  ARRAY['Matte Finish', 'Glossy Finish', 'Antique Finish'],
  ARRAY['Hand-carved details', '6-seater capacity', 'Cushioned chairs', 'Durable construction', 'Traditional motifs'],
  'Clean with dry cloth. Apply wood polish monthly. Avoid direct sunlight and moisture.',
  45,
  true,
  true,
  true,
  ARRAY['FSC Certified Wood', 'Export Quality', 'Handmade Certificate'],
  ARRAY['dining', 'furniture', 'handcrafted', 'sheesham', 'traditional', 'export']
),
(
  'Decorative Wall Art Panel',
  'Home Decor',
  'Wall Art',
  'Traditional Pakistani motifs carved in premium wood for modern homes',
  'Beautiful wall art panel featuring intricate geometric patterns inspired by traditional Pakistani and Islamic art. Each panel is individually hand-carved and can be used as a standalone piece or combined with multiple panels for a dramatic wall display.',
  'SLZ-DEC-WA-002',
  120.00,
  180.00,
  25,
  50,
  '{"length": 60, "width": 40, "height": 3, "unit": "cm", "weight": 2.5, "weight_unit": "kg"}',
  ARRAY['Mango Wood', 'Natural Stain'],
  ARRAY['Natural', 'Dark Brown', 'Golden Brown'],
  ARRAY['Natural Stain', 'Lacquer Finish'],
  ARRAY['Hand-carved patterns', 'Ready to hang', 'Geometric design', 'Traditional motifs'],
  'Dust regularly with soft cloth. Avoid moisture and direct sunlight.',
  20,
  true,
  true,
  true,
  ARRAY['Handmade Certificate', 'Export Quality'],
  ARRAY['wall art', 'decor', 'carved', 'geometric', 'traditional', 'islamic']
),
(
  'Carved Jewelry Box',
  'Accessories',
  'Storage',
  'Intricately carved jewelry box with traditional Pakistani designs',
  'Elegant jewelry box featuring detailed hand-carved floral patterns and geometric designs. The interior is lined with soft velvet and includes multiple compartments for organized storage of jewelry and precious items.',
  'SLZ-ACC-JB-003',
  45.00,
  75.00,
  50,
  100,
  '{"length": 25, "width": 18, "height": 12, "unit": "cm", "weight": 1.2, "weight_unit": "kg"}',
  ARRAY['Rosewood', 'Velvet Lining', 'Brass Hinges'],
  ARRAY['Natural Rosewood', 'Dark Mahogany'],
  ARRAY['Polished Finish', 'Matte Finish'],
  ARRAY['Hand-carved details', 'Velvet interior', 'Multiple compartments', 'Brass hardware', 'Lock and key'],
  'Clean exterior with dry cloth. Interior can be vacuumed gently.',
  15,
  false,
  true,
  true,
  ARRAY['Handmade Certificate', 'Export Quality'],
  ARRAY['jewelry', 'storage', 'carved', 'rosewood', 'traditional', 'gift']
),
(
  'Wooden Coffee Table',
  'Furniture',
  'Living Room',
  'Modern coffee table with traditional craftsmanship and contemporary design',
  'Stylish coffee table that perfectly blends traditional Pakistani woodworking with contemporary design. Features a spacious top surface and lower shelf for storage. The legs showcase beautiful hand-carved details that add character to any living space.',
  'SLZ-FUR-CT-004',
  320.00,
  480.00,
  15,
  20,
  '{"length": 120, "width": 60, "height": 45, "unit": "cm", "weight": 25, "weight_unit": "kg"}',
  ARRAY['Sheesham Wood', 'Natural Finish'],
  ARRAY['Natural Wood', 'Espresso', 'Honey Oak'],
  ARRAY['Natural Finish', 'Satin Finish', 'Semi-Gloss'],
  ARRAY['Lower storage shelf', 'Hand-carved legs', 'Spacious top', 'Sturdy construction'],
  'Clean with damp cloth. Apply wood conditioner every 6 months.',
  30,
  true,
  false,
  true,
  ARRAY['FSC Certified', 'Export Quality'],
  ARRAY['coffee table', 'furniture', 'living room', 'storage', 'handcrafted']
),
(
  'Decorative Bowls Set',
  'Kitchenware',
  'Serving',
  'Set of 3 handturned wooden bowls perfect for serving and decoration',
  'Beautiful set of three nesting bowls crafted from premium mango wood. Each bowl is individually hand-turned on a lathe and finished with food-safe natural oils. Perfect for serving fruits, nuts, or as decorative pieces.',
  'SLZ-KIT-BS-005',
  65.00,
  95.00,
  30,
  75,
  '{"large": {"diameter": 25, "height": 8}, "medium": {"diameter": 20, "height": 7}, "small": {"diameter": 15, "height": 6}, "unit": "cm", "weight": 1.8, "weight_unit": "kg"}',
  ARRAY['Mango Wood', 'Food-Safe Oil Finish'],
  ARRAY['Natural Wood', 'Light Brown'],
  ARRAY['Natural Oil Finish', 'Food-Safe Coating'],
  ARRAY['Set of 3 bowls', 'Hand-turned', 'Food-safe finish', 'Nesting design', 'Natural wood grain'],
  'Hand wash with mild soap. Dry immediately. Oil monthly with food-safe oil.',
  10,
  false,
  false,
  true,
  ARRAY['Food Safe', 'Handmade Certificate'],
  ARRAY['bowls', 'kitchenware', 'serving', 'mango wood', 'food safe', 'handturned']
),
(
  'Carved Mirror Frame',
  'Home Decor',
  'Mirrors',
  'Ornate mirror frame with traditional Pakistani wood carvings',
  'Stunning decorative mirror featuring an intricately carved wooden frame with traditional Pakistani and Mughal-inspired motifs. The frame is crafted from premium wood and includes a high-quality mirror. Perfect as a statement piece for any room.',
  'SLZ-DEC-MF-006',
  180.00,
  270.00,
  20,
  30,
  '{"outer_diameter": 80, "mirror_diameter": 50, "depth": 5, "unit": "cm", "weight": 4.5, "weight_unit": "kg"}',
  ARRAY['Sheesham Wood', 'High-Quality Mirror'],
  ARRAY['Natural Wood', 'Antique Gold', 'Dark Walnut'],
  ARRAY['Natural Finish', 'Antique Finish', 'Gold Leaf'],
  ARRAY['Hand-carved frame', 'High-quality mirror', 'Traditional motifs', 'Ready to hang', 'Ornate design'],
  'Clean mirror with glass cleaner. Dust frame with soft cloth.',
  25,
  true,
  true,
  true,
  ARRAY['Handmade Certificate', 'Export Quality'],
  ARRAY['mirror', 'frame', 'carved', 'decorative', 'traditional', 'ornate']
),
(
  'Wooden Spice Rack',
  'Kitchenware',
  'Storage',
  'Traditional spice rack with multiple compartments for kitchen organization',
  'Practical and beautiful spice rack featuring multiple small drawers and compartments. Each compartment is perfectly sized for storing different spices and seasonings. The rack includes hand-carved details and brass hardware for an authentic traditional look.',
  'SLZ-KIT-SR-007',
  95.00,
  140.00,
  25,
  40,
  '{"length": 35, "width": 15, "height": 40, "unit": "cm", "weight": 3.2, "weight_unit": "kg"}',
  ARRAY['Mango Wood', 'Brass Hardware'],
  ARRAY['Natural Wood', 'Medium Brown'],
  ARRAY['Natural Finish', 'Satin Finish'],
  ARRAY['12 compartments', 'Brass handles', 'Wall mountable', 'Hand-carved details', 'Spice labels included'],
  'Clean with dry cloth. Avoid moisture. Polish brass hardware monthly.',
  18,
  false,
  false,
  true,
  ARRAY['Handmade Certificate', 'Kitchen Safe'],
  ARRAY['spice rack', 'kitchen', 'storage', 'organization', 'traditional', 'brass']
),
(
  'Garden Planter Set',
  'Garden & Outdoor',
  'Planters',
  'Set of 3 wooden planters for indoor and outdoor gardening',
  'Beautiful set of three wooden planters in different sizes, perfect for creating a garden display indoors or outdoors. Each planter is treated with weather-resistant finish and includes drainage holes. The natural wood complements any garden or home decor.',
  'SLZ-GAR-PS-008',
  140.00,
  210.00,
  15,
  25,
  '{"large": {"length": 50, "width": 25, "height": 25}, "medium": {"length": 40, "width": 20, "height": 20}, "small": {"length": 30, "width": 15, "height": 15}, "unit": "cm", "weight": 8.5, "weight_unit": "kg"}',
  ARRAY['Teak Wood', 'Weather-Resistant Finish'],
  ARRAY['Natural Teak', 'Weathered Gray'],
  ARRAY['Weather-Resistant Coating', 'Natural Finish'],
  ARRAY['Set of 3 planters', 'Drainage holes', 'Weather-resistant', 'Indoor/outdoor use', 'Natural wood'],
  'Clean with mild soap and water. Re-apply weather coating annually for outdoor use.',
  20,
  false,
  false,
  true,
  ARRAY['Weather Resistant', 'Export Quality'],
  ARRAY['planters', 'garden', 'outdoor', 'teak', 'weather resistant', 'set']
),
(
  'Custom Wooden Sign',
  'Custom',
  'Signage',
  'Personalized wooden signs with custom text and designs',
  'Custom wooden signs crafted to your specifications. Perfect for businesses, homes, or special events. We can incorporate your text, logos, and design elements using traditional carving techniques. Each sign is unique and made to order.',
  'SLZ-CUS-WS-009',
  80.00,
  120.00,
  10,
  0,
  '{"length": 40, "width": 20, "height": 3, "unit": "cm", "weight": 1.5, "weight_unit": "kg"}',
  ARRAY['Pine Wood', 'Custom Stain'],
  ARRAY['Natural', 'Dark Brown', 'Custom Color'],
  ARRAY['Natural Stain', 'Painted Finish', 'Weathered Finish'],
  ARRAY['Custom text', 'Hand-carved', 'Weather-resistant option', 'Hanging hardware included', 'Personalized design'],
  'Care instructions provided based on finish selected.',
  30,
  true,
  false,
  true,
  ARRAY['Custom Made', 'Export Quality'],
  ARRAY['custom', 'sign', 'personalized', 'carved', 'business', 'home']
),
(
  'Wooden Cutting Board Set',
  'Kitchenware',
  'Cutting Boards',
  'Premium cutting board set made from antibacterial bamboo wood',
  'Professional-grade cutting board set featuring three different sizes for various kitchen tasks. Made from sustainable bamboo with natural antibacterial properties. Each board has a juice groove and non-slip feet for safety and convenience.',
  'SLZ-KIT-CB-010',
  55.00,
  85.00,
  40,
  60,
  '{"large": {"length": 35, "width": 25, "height": 2}, "medium": {"length": 30, "width": 20, "height": 2}, "small": {"length": 25, "width": 15, "height": 2}, "unit": "cm", "weight": 2.1, "weight_unit": "kg"}',
  ARRAY['Bamboo Wood', 'Food-Safe Finish'],
  ARRAY['Natural Bamboo'],
  ARRAY['Food-Safe Oil Finish'],
  ARRAY['Set of 3 boards', 'Juice grooves', 'Non-slip feet', 'Antibacterial bamboo', 'Easy to clean'],
  'Hand wash with soap and water. Dry immediately. Oil monthly with food-safe mineral oil.',
  7,
  false,
  true,
  true,
  ARRAY['Food Safe', 'Antibacterial', 'Sustainable'],
  ARRAY['cutting board', 'bamboo', 'kitchen', 'food safe', 'antibacterial', 'sustainable']
);