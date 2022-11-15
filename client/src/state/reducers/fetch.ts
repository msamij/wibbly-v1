import { INITIAL_STATE } from '@reducers/initialState';
import {
  ActionTypes,
  FETCH_ACTIVITIES,
  FETCH_BOOKING_DATES,
  FETCH_HOTELS,
  FETCH_PRODUCT,
  FETCH_TOURS,
} from 'types/actions';
import { Store } from 'types/store';

export const fetchReducer = (state: Store = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return { ...state, activities: action.payload };
    case FETCH_HOTELS:
      return { ...state, hotels: action.payload };
    case FETCH_TOURS:
      return { ...state, tours: action.payload };
    case FETCH_PRODUCT:
      return { ...state, productDetail: action.payload };
    case FETCH_BOOKING_DATES:
      return { ...state, bookingDates: action.payload };
    default:
      return state;
  }
};
