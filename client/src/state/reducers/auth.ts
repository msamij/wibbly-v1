import { INITIAL_STATE } from '@reducers/initialState';
import { AuthActionTypes, SIGN_IN, SIGN_OUT } from 'types/index';
import { Store } from 'types/store';

export const authReducer = (state: Store = INITIAL_STATE, action: AuthActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
