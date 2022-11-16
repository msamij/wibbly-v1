import { INITIAL_STATE } from '@reducers/initialState';
import { TOGGLE_BOOKING_DATES_POPUP, TOGGLE_OVERLAY, UIChangeActionTypes } from 'types/index';
import { Store } from 'types/store';

export const uiChangeReducer = (state: Store = INITIAL_STATE, action: UIChangeActionTypes) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return { ...state, toggleOverlay: action.payload };
    case TOGGLE_BOOKING_DATES_POPUP:
      return { ...state, toggleBookingDatesPopup: action.payload };
    default:
      return state;
  }
};
