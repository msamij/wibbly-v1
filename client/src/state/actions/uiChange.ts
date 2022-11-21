import { SET_MESSAGE_TEXT, TOGGLE_BOOKING_DATES_POPUP, TOGGLE_MESSAGE_POPUP, TOGGLE_OVERLAY } from 'types/index';

export const toggleOverlay = (toggle: boolean) => ({ type: TOGGLE_OVERLAY, payload: toggle });
export const toggleMessage = (toggle: boolean) => ({ type: TOGGLE_MESSAGE_POPUP, payload: toggle });
export const toggleBookingDatePopup = (toggle: boolean) => ({ type: TOGGLE_BOOKING_DATES_POPUP, payload: toggle });
export const setMessageText = (message: string) => ({ type: SET_MESSAGE_TEXT, payload: message });
