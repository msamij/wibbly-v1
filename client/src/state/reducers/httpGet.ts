import { INITIAL_STATE } from '@reducers/initialState';
import {
  FetchActionTypes,
  FETCH_ACTIVITIES,
  FETCH_BOOKING_DATES,
  FETCH_HOTELS,
  FETCH_PRODUCT_DETAILS,
  FETCH_TOURS,
  USER_BOOKING_EXISTS,
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
    case USER_BOOKING_EXISTS:
      return { ...state, userBookingExists: action.payload };
    default:
      return state;
  }
};
