export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const GAPI_LOAD_SUCCESS = 'GAPI_LOAD_SUCCESS';

export type AuthActionTypes =
  | { type: typeof SIGN_IN; payload: boolean }
  | { type: typeof SIGN_OUT; payload: boolean }
  | { type: typeof GAPI_LOAD_SUCCESS; payload: any };
