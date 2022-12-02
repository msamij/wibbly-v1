import { BaseUrls, ResourceEndPoints } from '@http/constants';
import HTTP, { RequestBody } from '@http/http';
import { Dispatch } from 'redux';
import { HttpPostActionTypes, SAVE_BOOKING } from 'types/index';

async function HttpPOST(pathName: string, body: RequestBody): Promise<any> {
  return await (await HTTP.post(`${BaseUrls.localHost}${BaseUrls.baseApi}${pathName}`, body)).json();
}

/**
 *
 * @param url End point at which this function should send http post.
 * @example url = tours/{tourName}
 *
 **/
export const saveBooking = (url: string, data: RequestBody) => async (dispatch: Dispatch<HttpPostActionTypes>) => {
  const response = await HttpPOST(`${url}/${ResourceEndPoints.reserveBooking}`, data);
  dispatch({ type: SAVE_BOOKING, payload: response });
};
