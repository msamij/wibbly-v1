import { SIGN_IN, SIGN_OUT } from 'types/index';
import { saveUserOnSignIn } from '@http/utils';

export const trySignIn = (auth: any) => async () => {
  await auth.signIn();
  saveUserOnSignIn(auth.currentUser.get().getId());
};

export const trySignOut = (auth: any) => () => auth.signOut();

export const changeAuth = (isSignedIn: boolean) => ({
  type: isSignedIn ? SIGN_IN : SIGN_OUT,
  payload: isSignedIn,
});
