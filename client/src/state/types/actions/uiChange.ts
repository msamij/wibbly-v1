export const RENDER_OVERLAY = 'RENDER_OVERLAY';
export const RENDER_BOOKING_DATES_POPUP = 'RENDER_BOOKING_DATES_POPUP';

export type UIChangeActionTypes =
  | { type: typeof RENDER_OVERLAY; payload: boolean }
  | { type: typeof RENDER_BOOKING_DATES_POPUP; payload: boolean };
