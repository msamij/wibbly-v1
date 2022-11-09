import { IResponse } from '@models/Model';

export interface IHotelResponse extends IResponse {
  no_of_rooms: number;
  price_per_night: number;
  hotel_images: [string];
}
export interface IHotelAddress {
  country_name: string;
  city_name: string;
  street_name: string;
}
export interface IHotelDetailResponse {
  hotel: [IHotelResponse];
  hotel_address: [IHotelAddress];
}

export type hotelsResponse = [IHotelResponse];
