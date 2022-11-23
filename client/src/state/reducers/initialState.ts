import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';

// Don't ever look at this stuff, or you'll get a panic attack.
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
  bookingStatusMessage: '',
  bookings: [''] as [string],
  toggleBookingDatesPopup: false,
  notifications: [''] as [string],
  tours: [INITIAL_TOUR] as toursResponse,
  hotels: [INITIAL_HOTEL] as hotelsResponse,
  bookingDates: { bookingDates: [''] as [string] },
  activities: [INITIAL_ACTIVITY] as activityResponse,
  userTourBookingExists: { userTourBookingsExists: false },
  productDetail: {} as IActivityDetailResponse | ITourDetailResponse | IHotelDetailResponse,
};
