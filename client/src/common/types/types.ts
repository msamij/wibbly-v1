export type productTypePlural = 'tours' | 'hotels' | 'activities';

export interface IUIChange {
  setMessageText: (
    message: string
  ) => {
    type: string;
    payload: string;
  };
  toggleMessage: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
  toggleOverlay: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
  toggleBookingDatePopup: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
}
export interface IState<T> {
  state: T;
}
export interface ISignIn {
  trySignIn: (auth: any) => void;
}
