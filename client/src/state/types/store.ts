import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { BookingDates } from '@models/BookingDates';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, IUserTourBookingExists, toursResponse } from '@models/Tour';

interface IAuthStore {
  gapiAuth: any;
  isSignedIn: boolean;
}
interface IProductsStore {
  tours: toursResponse;
  hotels: hotelsResponse;
  activities: activityResponse;
}
interface IProductDetailsStore {
  productDetail: ITourDetailResponse | IHotelDetailResponse | IActivityDetailResponse;
}
interface IToggleStateStore {
  toggleOverlay: boolean;
  toggleMessage: boolean;
  toggleBookingDatesPopup: boolean;
}
// Couldn't come up with a better name for this :)
interface UIStore {
  bookings: [string];
  messageText: string;
  notifications: [string];
  bookingDates: BookingDates;
  bookingStatusMessage: string;
}
interface UIStoreFlags {
  userTourBookingExists: IUserTourBookingExists;
}

export interface Store
  extends UIStore,
    IAuthStore,
    UIStoreFlags,
    IProductsStore,
    IToggleStateStore,
    IProductDetailsStore {}
