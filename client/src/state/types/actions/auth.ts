export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export type AuthActionTypes = { type: typeof SIGN_IN; payload: boolean } | { type: typeof SIGN_OUT; payload: boolean };
