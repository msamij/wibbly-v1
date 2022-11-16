import { TOGGLE_OVERLAY, TOGGLE_BOOKING_DATES_POPUP } from 'types/index';

export const toggleOverlay = (toggle: boolean) => ({ type: TOGGLE_OVERLAY, payload: toggle });
export const toggleBookingDatePopup = (toggle: boolean) => ({ type: TOGGLE_BOOKING_DATES_POPUP, payload: toggle });
