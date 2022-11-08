import {
  activityResponse,
  bookings,
  hotelsResponse,
  IActivityDetailResponse,
  IHotelDetailResponse,
  ITourDetailResponse,
  notifications,
  toursResponse,
} from './response';

export interface Store {
  isSignedIn: boolean;
  productDetail: ITourDetailResponse | IHotelDetailResponse | IActivityDetailResponse;
  activities: activityResponse;
  tours: toursResponse;
  hotels: hotelsResponse;
  bookings: bookings;
  notifications: notifications;
}
