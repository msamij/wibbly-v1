import { IActivityDetailResponse } from '@models/Activity';
import { IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse } from '@models/Tour';

export interface IProductDetailProps {
  state: IProductDetailMapState;
  fetchProductDetails: (pathName: string) => void;
  updateSelectedProduct: (
    productType: string
  ) => {
    type: string;
    payload: string;
  };
}
export interface IProductDetail extends ITourDetailResponse, IHotelDetailResponse, IActivityDetailResponse {}

export interface IProductDetailMapState {
  fetchedData: {
    productDetail: IProductDetail;
  };
  uiChange: {
    toggleBookingDatesPopup: boolean;
  };
}

interface IUrlMapping {
  hotels: 'hotel';
  tours: 'tour';
  activities: 'activity';
}
export const urlMapping: IUrlMapping = {
  hotels: 'hotel',
  tours: 'tour',
  activities: 'activity',
};

export type pathName = 'hotels' | 'activities' | 'tours';
