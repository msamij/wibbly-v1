interface IResponse {
  id: number;
  name: string;
}

export interface IHotelResponse extends IResponse {
  no_of_rooms: number;
  price_per_night: number;
  hotel_images: [string];
}

export interface ITourResponse extends IResponse {
  price: number;
  duration: number;
  tour_images: [string];
}

export interface IActivityResponse extends IResponse {
  price: number;
  activity_images: [string];
}

export type hotelsResponse = [IHotelResponse];
export type toursResponse = [ITourResponse];
export type activityResponse = [IActivityResponse];

export type bookings = [string];
export type notifications = [string];
