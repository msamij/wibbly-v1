export type productTypeSingular = 'tour' | 'hotel' | 'activity';
export type productTypePlural = 'tours' | 'hotels' | 'activities';

export type payloadReturnFlag = { type: string; payload: boolean };
export type payloadReturnString = { type: string; payload: string };

export interface IState<T> {
  state: T;
}
export interface IToggleOverlay {
  toggleOverlay: (toggle: boolean) => payloadReturnFlag;
}
export interface IToggleMessage {
  toggleMessage: (toggle: boolean) => payloadReturnFlag;
}
export interface IToggleBookingDate {
  toggleBookingDatePopup: (toggle: boolean) => payloadReturnFlag;
}
export interface IToggleBookingList {
  toggleBookingListPopup: (toggle: boolean) => payloadReturnFlag;
}
export interface IUIChange {
  setMessageText: (message: string) => payloadReturnString;
}
export interface ISignIn {
  trySignIn: (auth: any) => void;
}
