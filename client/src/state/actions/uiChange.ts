import { RENDER_OVERLAY, RENDER_BOOKING_DATES_POPUP } from 'types/index';

export const renderOverlay = (toggle: boolean) => ({ type: RENDER_OVERLAY, payload: toggle });
export const renderBookingDatePopup = (toggle: boolean) => ({ type: RENDER_BOOKING_DATES_POPUP, payload: toggle });
