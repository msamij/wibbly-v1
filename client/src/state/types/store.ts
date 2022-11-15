import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';
import { BookingDates } from '@models/BookingDates';
import { bookings, notifications } from 'types/uiState';

export interface Store {
  isSignedIn: boolean;
  bookings: bookings;
  tours: toursResponse;
  hotels: hotelsResponse;
  notifications: notifications;
  activities: activityResponse;
  bookingDates: BookingDates;
  productDetail: ITourDetailResponse | IHotelDetailResponse | IActivityDetailResponse;
}
