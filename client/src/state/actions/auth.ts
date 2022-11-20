import { saveUserOnSignIn } from '@http/utils';
import { GAPI_LOAD_SUCCESS, SIGN_IN, SIGN_OUT } from 'types/index';

export const saveGoogleAuthInstance = (gapiAuth: any) => ({
  type: GAPI_LOAD_SUCCESS,
  payload: gapiAuth,
});

export const trySignIn = (auth: any) => async () => {
  await auth.signIn();
  saveUserOnSignIn(auth.currentUser.get().getId());
};

export const trySignOut = (auth: any) => () => auth.signOut();

export const changeAuth = (isSignedIn: boolean) => ({
  type: isSignedIn ? SIGN_IN : SIGN_OUT,
  payload: isSignedIn,
});
