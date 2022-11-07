import { INITIAL_STATE } from '@reducers/initialState';
import { ActionTypes, SIGN_IN, SIGN_OUT } from 'types/actions';
import { Store } from 'types/store';

export const authReducer = (state: Store = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
