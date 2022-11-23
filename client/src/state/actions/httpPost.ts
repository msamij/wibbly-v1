import { Urls } from '@http/constants';
import HTTP, { RequestBody } from '@http/http';
import { Dispatch } from 'redux';
import { HttpPostActionTypes, SAVE_BOOKING } from 'types/index';

async function HttpPOST(pathName: string, body: RequestBody): Promise<any> {
  return await (await HTTP.post(`${Urls.baseUrl}${Urls.baseApiUrl}${pathName}`, body)).json();
}

/**
 *
 * @param url End point at which this function should send http post.
 * @example url = tours/tourName
 *
 **/
export const saveBooking = (url: string, userId: string, bookingDate: string) => async (
  dispatch: Dispatch<HttpPostActionTypes>
) => {
  const response = await HttpPOST(`${url}/${Urls.reserveBooking}`, { userId, bookingDate });
  dispatch({ type: SAVE_BOOKING, payload: response });
};
