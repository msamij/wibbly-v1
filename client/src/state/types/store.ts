import { activityResponse, bookings, hotelsResponse, notifications, toursResponse } from './response';

export interface Store {
  isSignedIn: boolean;
  activities: activityResponse;
  tours: toursResponse;
  hotels: hotelsResponse;
  bookings: bookings;
  notifications: notifications;
}
