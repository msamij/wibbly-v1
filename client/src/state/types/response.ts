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
  max_participants: number;
  description: string;
  tour_images: [string];
}

export interface IActivityResponse extends IResponse {
  price: number;
  decription: string;
  activity_images: [string];
}

export type hotelsResponse = [IHotelResponse];
export type toursResponse = [ITourResponse];
export type activityResponse = [IActivityResponse];

export type bookings = [string];
export type notifications = [string];

interface IActivityInstructor {
  id: number;
  first_name: string;
  last_name: string;
  instructor_image: string;
}

interface ITourInstructor {
  id: number;
  first_name: string;
  last_name: string;
  instructor_image: string;
}

export interface IActivityDetailResponse {
  activity: [IActivityResponse];
  activity_instructor: [{ instructor: IActivityInstructor }];
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

export interface ITourDetailResponse {
  tour: [ITourResponse];
  tour_instructor: [{ instructor: ITourInstructor }];
}
