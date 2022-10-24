interface ResponseData {
  id: number;
  name: string;
}

export interface HotelResponseData {
  id: number;
  name: string;
  no_of_rooms: number;
  price_per_night: number;
  hotel_images: [string];
}

export interface TourResponseData extends ResponseData {
  price: number;
  duration: number;
  tour_images: [string];
}

export interface ActivityResponseData extends ResponseData {
  price: number;
  activity_images: [string];
}

export type hotelsResponse = [HotelResponseData];
export type toursResponse = [TourResponseData];
export type activityResponse = [ActivityResponseData];
