import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';

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
  isSignedIn: false,
  bookings: [''] as [string],
  notifications: [''] as [string],
  tours: [INITIAL_TOUR] as toursResponse,
  hotels: [INITIAL_HOTEL] as hotelsResponse,
  activities: [INITIAL_ACTIVITY] as activityResponse,
  productDetail: {} as IActivityDetailResponse | ITourDetailResponse | IHotelDetailResponse,
};
