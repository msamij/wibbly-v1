import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { BookingDates } from '@models/BookingDates';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';
import { bookings, notifications } from 'types/uiState';

export interface Store {
  bookings: [string];
  notifications: [string];
  isSignedIn: boolean;
  tours: toursResponse;
  hotels: hotelsResponse;
  renderOverlay: boolean;
  bookingDates: BookingDates;
  activities: activityResponse;
  renderBookingDatesPopup: boolean;
  productDetail: ITourDetailResponse | IHotelDetailResponse | IActivityDetailResponse;
}
