import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { IBookingDates } from '@http/Models/Bookings';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { IUserBookingExists } from '@models/Model';
import { ITourDetailResponse, toursResponse } from '@models/Tour';
import { IUserBookingsList } from '@models/Bookings';

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
interface IUserBookingsStore {
  userBookingsList: IUserBookingsList;
}
interface IToggleStateStore {
  toggleOverlay: boolean;
  toggleMessage: boolean;
  toggleBookingListPopup: boolean;
  toggleBookingDatesPopup: boolean;
}

// Couldn't come up with a better name for this :)
interface UIStore {
  messageText: string;
  bookingDates: IBookingDates;
  selectedProductType: string;
  bookingStatusMessage: string;
}
interface IUIStoreFlags {
  userBookingExists: IUserBookingExists;
}

export interface Store
  extends UIStore,
    IAuthStore,
    IUIStoreFlags,
    IProductsStore,
    IToggleStateStore,
    IUserBookingsStore,
    IProductDetailsStore {}
