import { SIGN_IN, SIGN_OUT } from 'types/actions';
import { saveUserOnSignIn } from './saveUser';

export const trySignIn = (auth: any) => async () => {
  await auth.signIn();
  saveUserOnSignIn(auth.currentUser.get().getId());
};

export const trySignOut = (auth: any) => () => auth.signOut();

export const changeAuth = (isSignedIn: boolean) => ({
  type: SIGN_IN,
  payload: isSignedIn,
});
