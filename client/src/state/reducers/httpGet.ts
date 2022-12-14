import { INITIAL_STATE } from '@reducers/initialState';
import {
  FetchActionTypes,
  FETCH_ACTIVITIES,
  FETCH_BOOKING_DATES,
  FETCH_HOTELS,
  FETCH_PRODUCT_DETAILS,
  FETCH_TOURS,
  FETCH_USER_BOOKINGS,
  FETCH_USER_BOOKING_EXISTS_FLAG,
} from 'types/index';
import { Store } from 'types/store';

export const fetchReducer = (state: Store = INITIAL_STATE, action: FetchActionTypes) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return { ...state, activities: action.payload };
    case FETCH_HOTELS:
      return { ...state, hotels: action.payload };
    case FETCH_TOURS:
      return { ...state, tours: action.payload };
    case FETCH_PRODUCT_DETAILS:
      return { ...state, productDetail: action.payload };
    case FETCH_BOOKING_DATES:
      return { ...state, bookingDates: action.payload };
    case FETCH_USER_BOOKINGS:
      return { ...state, userBookingsList: action.payload };
    case FETCH_USER_BOOKING_EXISTS_FLAG:
      return { ...state, userBookingExists: action.payload };
    default:
      return state;
  }
};
