-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    hero_img TEXT,
    short_copy TEXT,
    story_html TEXT,
    spec_pdf_url TEXT
);

-- Add indexes for better query performance
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category_id ON products(category_id);

-- Add RLS (Row Level Security)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to products
CREATE POLICY "Products are viewable by everyone" 
    ON products FOR SELECT 
    USING (true);

-- Add table comment
COMMENT ON TABLE products IS 'Products within categories';
COMMENT ON COLUMN products.category_id IS 'Foreign key to categories table';
COMMENT ON COLUMN products.slug IS 'URL-friendly unique identifier';
COMMENT ON COLUMN products.hero_img IS 'Main product image URL';
COMMENT ON COLUMN products.short_copy IS 'Brief product description';
COMMENT ON COLUMN products.story_html IS 'Full product story/description in HTML format';
COMMENT ON COLUMN products.spec_pdf_url IS 'URL to product specifications PDF';