import { SIGN_IN, SIGN_OUT } from 'types/actions';

export const trySignIn = (auth: any) => () => {
  auth.signIn();
};

export const trySignOut = (auth: any) => () => {
  auth.signOut();
};

export const changeAuth = (isSignedIn: boolean) => {
  if (isSignedIn) {
    return {
      type: SIGN_IN,
      payload: true,
    };
  } else {
    return {
      type: SIGN_OUT,
      payload: false,
    };
  }
};
