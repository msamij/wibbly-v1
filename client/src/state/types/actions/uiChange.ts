export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
export const TOGGLE_BOOKING_DATES_POPUP = 'RENDER_BOOKING_DATES_POPUP';

export type UIChangeActionTypes =
  | { type: typeof TOGGLE_OVERLAY; payload: boolean }
  | { type: typeof TOGGLE_BOOKING_DATES_POPUP; payload: boolean };
