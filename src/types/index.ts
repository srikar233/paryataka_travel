/**
 * Common Types for Paryataka Application
 */

// Location Type
export interface Location {
  city: string;
  state: string;
  country?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

// Duration Type
export interface Duration {
  days: number;
  nights: number;
}

// Package/Destination Type
export interface Package {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  locations: Location[];
  duration: Duration;
  basePrice: number;
  thumbnailImage: string;
  images?: string[];
  categoryId?: {
    _id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

// API Response Type
export interface APIResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

// Home Page Data Type
export interface HomePageData {
  weekendTripsUnder10k: Package[];
  featuredDestinations: Package[];
  stories?: Story[];
}

// Story Type
export interface Story {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

// Booking Type
export interface Booking {
  _id: string;
  packageId: string;
  userId: string;
  startDate: string;
  endDate: string;
  numberOfTravelers: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}

// User Type
export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  createdAt: string;
}
