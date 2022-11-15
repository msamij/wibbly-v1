import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { BookingDates } from '@models/BookingDates';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';

export const FETCH_TOURS = 'FETCH_TOURS';
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_BOOKING_DATES = 'FETCH_BOOKING_DATES';
export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';

export type FetchActionTypes =
  | { type: typeof FETCH_TOURS; payload: toursResponse }
  | { type: typeof FETCH_HOTELS; payload: hotelsResponse }
  | { type: typeof FETCH_ACTIVITIES; payload: activityResponse }
  | { type: typeof FETCH_BOOKING_DATES; payload: BookingDates }
  | {
      type: typeof FETCH_PRODUCT_DETAILS;
      payload: IActivityDetailResponse | IHotelDetailResponse | ITourDetailResponse;
    };
