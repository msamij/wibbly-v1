import { productTypePlural } from '@globalTypes/types';

export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
export const SET_MESSAGE_TEXT = 'SET_MESSAGE_TEXT';
export const TOGGLE_MESSAGE_POPUP = 'TOGGLE_MESSAGE_POPUP';
export const SELECTED_PRODUCT_TYPE = 'SELECTED_PRODUCT_TYPE';
export const TOGGLE_BOOKING_LIST_POPUP = 'TOGGLE_BOOKING_LIST_POPUP';
export const TOGGLE_BOOKING_DATES_POPUP = 'TOGGLE_BOOKING_DATES_POPUP';

export type UIChangeActionTypes =
  | { type: typeof TOGGLE_OVERLAY; payload: boolean }
  | { type: typeof SET_MESSAGE_TEXT; payload: string }
  | { type: typeof TOGGLE_MESSAGE_POPUP; payload: boolean }
  | { type: typeof TOGGLE_BOOKING_LIST_POPUP; payload: boolean }
  | { type: typeof TOGGLE_BOOKING_DATES_POPUP; payload: boolean }
  | { type: typeof SELECTED_PRODUCT_TYPE; payload: productTypePlural };
