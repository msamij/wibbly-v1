import { IUserTourBookingExists } from '@http/Models/Tour';

interface IUIChange {
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
interface IHttp {
  trySignIn: (auth: any) => void;
  fetchBookingExistsFlag: (userId: any) => void;
}
interface IDescription {
  description: string;
  state: IDescriptionMapState;
  productType: 'hotel' | 'tour' | 'activity';
}

export interface IDescriptionMapState {
  auth: {
    gapiAuth: any;
    isSignedIn: boolean;
  };
  fetchedData: {
    userTourBookingExists: IUserTourBookingExists;
  };
}

export interface IDescriptionProps extends IUIChange, IHttp, IDescription {}
