import { IUserBookingsList } from '@http/Models/Bookings';
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
const INITIAL_USER_BOOKINGS = {
  tourBookings: [],
  hotelBookings: [],
  activityBookings: [],
};

export const INITIAL_STATE = {
  gapiAuth: null,
  messageText: '',
  isSignedIn: false,
  toggleOverlay: false,
  toggleMessage: false,
  selectedProductType: '',
  bookingStatusMessage: '',
  bookings: [''] as any,
  toggleBookingListPopup: false,
  toggleBookingDatesPopup: false,
  tours: [INITIAL_TOUR] as any,
  hotels: [INITIAL_HOTEL] as any,
  userBookingExists: { userBookingsExists: null },
  bookingDates: { bookingDates: [''] as any },
  activities: [INITIAL_ACTIVITY] as any,
  userBookingsList: INITIAL_USER_BOOKINGS as any,
  productDetail: {} as any,
};
