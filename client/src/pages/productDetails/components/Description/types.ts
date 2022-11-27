import {
  ISignIn,
  IState,
  IToggleBookingDate,
  IToggleMessage,
  IToggleOverlay,
  IUIChange,
  productTypePlural,
  productTypeSingular,
} from '@globalTypes/types';
import { IUserBookingExists } from '@models/Model';

interface IHttp extends ISignIn {
  fetchBookingExistsFlag: (productType: productTypePlural, userId: string) => void;
}
interface IDescription extends IState<IDescriptionMapState> {
  description: string;
  productType: productTypeSingular;
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

export interface IDescriptionProps
  extends IHttp,
    IUIChange,
    IDescription,
    IToggleOverlay,
    IToggleMessage,
    IToggleBookingDate {}
