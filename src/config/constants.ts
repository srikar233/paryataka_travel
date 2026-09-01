// Application Constants
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Paryataka';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Travel Booking Platform';

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://paryataka-be.onrender.com/api';

// API Endpoints
export const API_ENDPOINTS = {
  HOME: `${API_BASE_URL}/home`,
  PACKAGES: `${API_BASE_URL}/packages/public`,
  FEATURED_DESTINATIONS: `${API_BASE_URL}/featuredDestinations`,
  WEEKEND_TRIPS: `${API_BASE_URL}/weekendTrips`,
} as const;

// Cache Revalidation Times (in seconds)
export const REVALIDATE_TIMES = {
  HOME: 60,
  PACKAGES: 120,
  DESTINATIONS: 120,
} as const;

// UI Configuration
export const UI_CONFIG = {
  NAVBAR_HEIGHT: '80px',
  SIDEBAR_WIDTH: '280px',
  MOBILE_BREAKPOINT: 768,
} as const;
