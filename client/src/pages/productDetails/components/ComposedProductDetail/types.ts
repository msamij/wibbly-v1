import { IProductDetail } from '../types';

export interface IComposeProductDetailProps {
  product: IProductDetail;
  productType: 'hotels' | 'activities' | 'tours';
}
export interface IDetailHeaderArgs {
  name: string;
  price: number;
  title1?: string;
  title2?: string;
  hotelType?: 'hotel';
}
export interface IMainArgs {
  images: string[];
  description: string;
  instructorName?: string;
  instructorImage?: string;
  instructorExists: boolean;
}
export interface IDescriptionArgs {
  description: string;
  descriptionType: 'hotel' | 'tour' | 'activity';
}
export interface IComposedComponentArgs extends IDetailHeaderArgs, IMainArgs, IDescriptionArgs {}
