import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';

// Don't ever look at this stuff, or you'll get a panic attack. (I am really sorry that I did this)
const INITIAL_ACTIVITY = {
  id: 0,
  name: '',
  price: 0,
  activity_images: [''],
};

const INITIAL_TOUR = {
  id: 0,
  name: '',
  price: 0,
  duration: 0,
  tour_images: [''],
};

const INITIAL_HOTEL = {
  id: 0,
  name: '',
  price_per_night: 0,
  no_of_rooms: 0,
  hotel_images: [''],
};

export const INITIAL_STATE = {
  gapiAuth: null,
  messageText: '',
  isSignedIn: false,
  toggleOverlay: false,
  toggleMessage: false,
  selectedProductType: '',
  bookingStatusMessage: '',
  bookings: [''] as [string],
  toggleBookingListPopup: false,
  toggleBookingDatesPopup: false,
  notifications: [''] as [string],
  tours: [INITIAL_TOUR] as toursResponse,
  hotels: [INITIAL_HOTEL] as hotelsResponse,
  userBookingExists: { userBookingsExists: null },
  bookingDates: { bookingDates: [''] as [string] },
  activities: [INITIAL_ACTIVITY] as activityResponse,
  productDetail: {} as IActivityDetailResponse | ITourDetailResponse | IHotelDetailResponse,
};
