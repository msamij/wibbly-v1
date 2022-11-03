import { hotelsResponse, activityResponse, toursResponse } from './response';

export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_TOURS = 'FETCH_TOURS';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';

export type ActionTypes =
  | { type: typeof FETCH_HOTELS; payload: hotelsResponse }
  | { type: typeof FETCH_TOURS; payload: toursResponse }
  | { type: typeof FETCH_ACTIVITIES; payload: activityResponse };
