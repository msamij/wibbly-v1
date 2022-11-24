import { IUIChange, productTypePlural } from '@globalTypes/types';
import { IUserBookingExists } from '@models/Model';

// interface IUIChange {
//   setMessageText: (
//     message: string
//   ) => {
//     type: string;
//     payload: string;
//   };
//   toggleMessage: (
//     toggle: boolean
//   ) => {
//     type: string;
//     payload: boolean;
//   };
//   toggleOverlay: (
//     toggle: boolean
//   ) => {
//     type: string;
//     payload: boolean;
//   };
//   toggleBookingDatePopup: (
//     toggle: boolean
//   ) => {
//     type: string;
//     payload: boolean;
//   };
// }

interface IHttp {
  trySignIn: (auth: any) => void;
  fetchBookingExistsFlag: (productType: productTypePlural, userId: any) => void;
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
    userBookingExists: IUserBookingExists;
  };
  uiChange: {
    selectedProductType: string;
  };
}

export interface IDescriptionProps extends IUIChange, IHttp, IDescription {}
