export interface Category {
  id: string;
  slug: string;
  name: string;
  hero_img: string | null;
  description: string | null;
}

export interface Product {
  id: string;
  category_id: string;
  slug: string;
  name: string;
  hero_img: string | null;
  short_copy: string | null;
  story_html: string | null;
  spec_pdf_url: string | null;
}

export interface Lead {
  id: string;
  product_id: string;
  email: string;
  company: string | null;
  country: string | null;
  qty: string | null;
  message: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  created_at: string;
}