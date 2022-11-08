import {
  activityResponse,
  hotelsResponse,
  IActivityDetailResponse,
  IHotelDetailResponse,
  ITourDetailResponse,
  toursResponse,
} from './response';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const FETCH_TOURS = 'FETCH_TOURS';
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export type ActionTypes =
  | { type: typeof FETCH_HOTELS; payload: hotelsResponse }
  | { type: typeof FETCH_TOURS; payload: toursResponse }
  | { type: typeof FETCH_ACTIVITIES; payload: activityResponse }
  | { type: typeof SIGN_IN; payload: boolean }
  | { type: typeof SIGN_OUT; payload: boolean }
  | { type: typeof FETCH_PRODUCT; payload: IActivityDetailResponse | IHotelDetailResponse | ITourDetailResponse };
