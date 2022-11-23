import { Urls } from '@http/constants';
import HTTP from '@http/http';
import { Dispatch } from 'redux';
import { HttpPostActionTypes, SAVE_BOOKING } from 'types/index';

async function HttpPOST(pathName: string, userId: any): Promise<any> {
  return await (await HTTP.post(`${Urls.baseUrl}${Urls.baseApiUrl}${pathName}`, { userId })).json();
}

/**
 *
 * @param url End point at which this function should send http post.
 * @example url = tours/tourName
 *
 **/
export const saveBooking = (url: string, userId: string) => async (dispatch: Dispatch<HttpPostActionTypes>) => {
  const response = await HttpPOST(`${url}/${Urls.reserveBooking}`, userId);
  dispatch({ type: SAVE_BOOKING, payload: response });
};
