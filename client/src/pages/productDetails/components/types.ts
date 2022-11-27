import { IState, payloadReturnString, productTypePlural } from '@globalTypes/types';
import { IActivityDetailResponse } from '@models/Activity';
import { IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse } from '@models/Tour';

export interface IProductDetailProps extends IState<IProductDetailMapState> {
  fetchProductDetails: (pathName: string) => void;
  updateSelectedProduct: (productType: productTypePlural) => payloadReturnString;
}
export interface IProductDetailMapState {
  fetchedData: {
    productDetail: IProductDetail;
  };
  uiChange: {
    toggleBookingDatesPopup: boolean;
  };
}
export const urlMapping: IUrlMapping = {
  hotels: 'hotel',
  tours: 'tour',
  activities: 'activity',
};
export interface IProductDetail extends ITourDetailResponse, IHotelDetailResponse, IActivityDetailResponse {}

interface IUrlMapping {
  hotels: 'hotel';
  tours: 'tour';
  activities: 'activity';
}
