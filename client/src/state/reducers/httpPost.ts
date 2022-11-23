import { INITIAL_STATE } from '@reducers/initialState';
import { HttpPostActionTypes, SAVE_BOOKING } from 'types/index';
import { Store } from 'types/store';

export const postReducer = (state: Store = INITIAL_STATE, action: HttpPostActionTypes) => {
  switch (action.type) {
    case SAVE_BOOKING:
      return { ...state, bookingStatusMessage: action.payload };
    default:
      return state;
  }
};
