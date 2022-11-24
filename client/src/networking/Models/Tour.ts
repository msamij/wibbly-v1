import { IResponse, IInstructor } from '@models/Model';

export interface ITourResponse extends IResponse {
  price: number;
  duration: number;
  max_participants: number;
  description: string;
  tour_images: [string];
}
export interface ITourDetailResponse {
  tour: [ITourResponse];
  tour_instructor: [{ instructor: IInstructor }];
}
export type toursResponse = [ITourResponse];
