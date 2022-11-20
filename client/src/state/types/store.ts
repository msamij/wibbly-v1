import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { BookingDates } from '@models/BookingDates';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';

export interface Store {
  gapiAuth: any;
  bookings: [string];
  notifications: [string];
  isSignedIn: boolean;
  tours: toursResponse;
  hotels: hotelsResponse;
  toggleOverlay: boolean;
  bookingDates: BookingDates;
  activities: activityResponse;
  toggleBookingDatesPopup: boolean;
  productDetail: ITourDetailResponse | IHotelDetailResponse | IActivityDetailResponse;
}
