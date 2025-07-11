import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Property {
  id: string
  title: string
  location: string
  price: string
  original_price?: string
  size: string
  type: 'House' | 'Plot' | 'Commercial'
  bedrooms?: number
  bathrooms?: number
  parking?: number
  year_built?: number
  features: string[]
  amenities: string[]
  nearby_places: string[]
  images: string[]
  description: string
  agent_name: string
  agent_phone: string
  agent_email: string
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
}
export interface SelazaarProduct {
  excerpt: string
  content: string
  category: string
  author: string
  published_date: string
  image: string
  read_time: string
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  content: string
  rating: number
  created_at: string
}

export interface WholesaleInquiry {
  id: string
  company_name: string
  contact_person: string
  email: string
  phone: string
  country: string
  business_type: string
  product_interest: string
  order_quantity?: string
  message?: string
  hear_about_us?: string
  status: 'pending' | 'contacted' | 'closed'
  created_at: string
}

export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: 'pending' | 'responded' | 'closed'
  created_at: string
}