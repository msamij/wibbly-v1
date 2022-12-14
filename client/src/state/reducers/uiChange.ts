import { INITIAL_STATE } from '@reducers/initialState';
import {
  SELECTED_PRODUCT_TYPE,
  SET_MESSAGE_TEXT,
  TOGGLE_BOOKING_DATES_POPUP,
  TOGGLE_MESSAGE_POPUP,
  TOGGLE_OVERLAY,
  UIChangeActionTypes,
  TOGGLE_BOOKING_LIST_POPUP,
} from 'types/index';
import { Store } from 'types/store';

export const uiChangeReducer = (state: Store = INITIAL_STATE, action: UIChangeActionTypes) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return { ...state, toggleOverlay: action.payload };
    case TOGGLE_BOOKING_DATES_POPUP:
      return { ...state, toggleBookingDatesPopup: action.payload };
    case TOGGLE_MESSAGE_POPUP:
      return { ...state, toggleMessage: action.payload };
    case SET_MESSAGE_TEXT:
      return { ...state, messageText: action.payload };
    case SELECTED_PRODUCT_TYPE:
      return { ...state, selectedProductType: action.payload };
    case TOGGLE_BOOKING_LIST_POPUP:
      return { ...state, toggleBookingListPopup: action.payload };
    default:
      return state;
  }
};
