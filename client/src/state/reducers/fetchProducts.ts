import { ActionTypes, FETCH_ACTIVITIES, FETCH_HOTELS, FETCH_TOURS } from '../types/actions';
import { IActivityResponse, IHotelResponse, ITourResponse } from '../types/response';
import { Store } from '../types/store';

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

const INITIAL_STATE = {
  isSignedIn: false,
  activities: [INITIAL_ACTIVITY] as [IActivityResponse],
  tours: [INITIAL_TOUR] as [ITourResponse],
  hotels: [INITIAL_HOTEL] as [IHotelResponse],
  bookings: [''] as [string],
  notifications: [''] as [string],
};

export const fetchReducer = (state: Store = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return { ...state, activities: action.payload };
    case FETCH_HOTELS:
      return { ...state, hotels: action.payload };
    case FETCH_TOURS:
      return { ...state, tours: action.payload };
    default:
      return state;
  }
};
