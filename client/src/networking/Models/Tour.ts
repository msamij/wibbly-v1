import { IResponse, IInstructor } from '@models/Model';

export interface ITourDetailResponse {
  tour: [ITourResponse];
  tour_instructor: [{ instructor: IInstructor }];
}
export interface ITourResponse extends IResponse {
  price: number;
  duration: number;
  max_participants: number;
  description: string;
  tour_images: [string];
}

export type toursResponse = [ITourResponse];
