
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  address?: string;
}
