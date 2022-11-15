import { INITIAL_STATE } from '@reducers/initialState';
import { RENDER_BOOKING_DATES_POPUP, RENDER_OVERLAY, UIChangeActionTypes } from 'types/index';
import { Store } from 'types/store';

export const uiChangeReducer = (state: Store = INITIAL_STATE, action: UIChangeActionTypes) => {
  switch (action.type) {
    case RENDER_OVERLAY:
      return { ...state, renderOverlay: action.payload };
    case RENDER_BOOKING_DATES_POPUP:
      return { ...state, renderBookingDatesPopup: action.payload };
    default:
      return state;
  }
};
