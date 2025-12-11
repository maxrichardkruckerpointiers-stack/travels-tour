export type Category = 'All' | 'Cultural' | 'Beach' | 'Nightlife' | 'Gastronomy';

export interface Experience {
  id: number;
  title: string;
  category: Category;
  image: string;
  price: string;
  duration: string;
  description: string;
  rating: number;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface MapPoint {
  id: number;
  title: string;
  description: string;
  top: string; // percentage
  left: string; // percentage
  image: string;
}

export interface BookingFormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: number;
  interest: string;
}

export interface AiItineraryRequest {
  days: number;
  interests: string[];
  budget: 'Budget' | 'Moderate' | 'Luxury';
}