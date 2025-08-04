-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    hero_img TEXT,
    description TEXT
);

-- Add indexes for better query performance
CREATE INDEX idx_categories_slug ON categories(slug);

-- Add RLS (Row Level Security)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to categories
CREATE POLICY "Categories are viewable by everyone" 
    ON categories FOR SELECT 
    USING (true);

-- Add table comment
COMMENT ON TABLE categories IS 'Product categories with unique slugs for URL routing';
COMMENT ON COLUMN categories.slug IS 'URL-friendly unique identifier';
COMMENT ON COLUMN categories.hero_img IS 'Hero image URL for category page';