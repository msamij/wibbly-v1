import { IBookingDates } from '@http/Models/Bookings';
import { IUserBookingExists } from '@http/Models/Model';
import { activityResponse, IActivityDetailResponse } from '@models/Activity';
import { IUserBookingsList } from '@models/Bookings';
import { hotelsResponse, IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse, toursResponse } from '@models/Tour';

export const FETCH_TOURS = 'FETCH_TOURS';
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_USER_BOOKINGS = 'FETCH_USER_BOOKINGS';
export const FETCH_BOOKING_DATES = 'FETCH_BOOKING_DATES';
export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';
export const FETCH_USER_BOOKING_EXISTS_FLAG = 'FETCH_USER_TOUR_BOOKING_EXISTS_FLAG';

export type FetchActionTypes =
  | { type: typeof FETCH_TOURS; payload: toursResponse }
  | { type: typeof FETCH_HOTELS; payload: hotelsResponse }
  | { type: typeof FETCH_ACTIVITIES; payload: activityResponse }
  | { type: typeof FETCH_BOOKING_DATES; payload: IBookingDates }
  | {
      type: typeof FETCH_PRODUCT_DETAILS;
      payload: IActivityDetailResponse | IHotelDetailResponse | ITourDetailResponse;
    }
  | { type: typeof FETCH_USER_BOOKINGS; payload: IUserBookingsList }
  | { type: typeof FETCH_USER_BOOKING_EXISTS_FLAG; payload: IUserBookingExists };
