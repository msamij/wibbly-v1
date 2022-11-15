import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { BookingDates } from '@models/BookingDates';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const FETCH_TOURS = 'FETCH_TOURS';
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_BOOKING_DATES = 'FETCH_BOOKING_DATES';

export type ActionTypes =
  | { type: typeof SIGN_IN; payload: boolean }
  | { type: typeof SIGN_OUT; payload: boolean }
  | { type: typeof FETCH_TOURS; payload: toursResponse }
  | { type: typeof FETCH_HOTELS; payload: hotelsResponse }
  | { type: typeof FETCH_BOOKING_DATES; payload: BookingDates }
  | { type: typeof FETCH_ACTIVITIES; payload: activityResponse }
  | { type: typeof FETCH_PRODUCT; payload: IActivityDetailResponse | IHotelDetailResponse | ITourDetailResponse };
