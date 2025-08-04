-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    company TEXT,
    country TEXT,
    qty TEXT,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Add indexes for better query performance
CREATE INDEX idx_leads_product_id ON leads(product_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);

-- Add RLS (Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insert (for lead generation)
CREATE POLICY "Anyone can create leads" 
    ON leads FOR INSERT 
    WITH CHECK (true);

-- Create policy to restrict read access (admin only)
-- Note: You'll need to implement proper auth and update this policy
CREATE POLICY "Only authenticated users can view leads" 
    ON leads FOR SELECT 
    USING (auth.role() = 'authenticated');

-- Add table comment
COMMENT ON TABLE leads IS 'Lead generation form submissions';
COMMENT ON COLUMN leads.product_id IS 'Foreign key to products table';
COMMENT ON COLUMN leads.email IS 'Contact email address';
COMMENT ON COLUMN leads.company IS 'Company name';
COMMENT ON COLUMN leads.country IS 'Country of origin';
COMMENT ON COLUMN leads.qty IS 'Quantity interested in';
COMMENT ON COLUMN leads.message IS 'Additional message from lead';
COMMENT ON COLUMN leads.status IS 'Lead status: new, contacted, qualified, closed';
COMMENT ON COLUMN leads.created_at IS 'Timestamp when lead was created';