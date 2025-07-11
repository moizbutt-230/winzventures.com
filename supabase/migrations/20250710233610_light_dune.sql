@@ .. @@
 /*
-  # Create Silazaar Products Table
+  # Create Selazaar Products Table
 
   1. New Tables
-    - `silazaar_products`
+    - `selazaar_products`
       - `id` (uuid, primary key)
@@ .. @@
-CREATE TABLE IF NOT EXISTS silazaar_products (
+CREATE TABLE IF NOT EXISTS selazaar_products (
   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
@@ .. @@
-ALTER TABLE silazaar_products ENABLE ROW LEVEL SECURITY;
+ALTER TABLE selazaar_products ENABLE ROW LEVEL SECURITY;
 
-CREATE POLICY "Silazaar products are viewable by everyone"
-  ON silazaar_products
+CREATE POLICY "Selazaar products are viewable by everyone"
+  ON selazaar_products
   FOR SELECT
   TO public
   USING (true);
 
-CREATE POLICY "Authenticated users can manage Silazaar products"
-  ON silazaar_products
+CREATE POLICY "Authenticated users can manage Selazaar products"
+  ON selazaar_products
   FOR ALL
   TO authenticated
   USING (true)
   WITH CHECK (true);
 
 -- Create indexes for better performance
-CREATE INDEX IF NOT EXISTS idx_silazaar_products_category ON silazaar_products(category);
-CREATE INDEX IF NOT EXISTS idx_silazaar_products_active ON silazaar_products(is_active);
-CREATE INDEX IF NOT EXISTS idx_silazaar_products_featured ON silazaar_products(is_featured);
-CREATE INDEX IF NOT EXISTS idx_silazaar_products_export_ready ON silazaar_products(export_ready);
-CREATE INDEX IF NOT EXISTS idx_silazaar_products_sku ON silazaar_products(sku);
+CREATE INDEX IF NOT EXISTS idx_selazaar_products_category ON selazaar_products(category);
+CREATE INDEX IF NOT EXISTS idx_selazaar_products_active ON selazaar_products(is_active);
+CREATE INDEX IF NOT EXISTS idx_selazaar_products_featured ON selazaar_products(is_featured);
+CREATE INDEX IF NOT EXISTS idx_selazaar_products_export_ready ON selazaar_products(export_ready);
+CREATE INDEX IF NOT EXISTS idx_selazaar_products_sku ON selazaar_products(sku);
 
 -- Create trigger for updated_at
-CREATE TRIGGER update_silazaar_products_updated_at
-  BEFORE UPDATE ON silazaar_products
+CREATE TRIGGER update_selazaar_products_updated_at
+  BEFORE UPDATE ON selazaar_products
   FOR EACH ROW
   EXECUTE FUNCTION update_updated_at_column();
 
 -- Insert sample products
-INSERT INTO silazaar_products (
+INSERT INTO selazaar_products (