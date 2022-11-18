import { IResponse, IInstructor } from '@models/Model';

export interface IActivityResponse extends IResponse {
  price: number;
  description: string;
  activity_images: [string];
}
export interface IActivityDetailResponse {
  activity: [IActivityResponse];
  activity_instructor: [{ instructor: IInstructor }];
}

export type activityResponse = [IActivityResponse];
