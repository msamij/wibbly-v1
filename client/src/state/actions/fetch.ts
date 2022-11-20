import { Urls } from '@http/constants';
import HTTP from '@http/http';
import { Dispatch } from 'redux';
import {
  FetchActionTypes,
  FETCH_ACTIVITIES,
  FETCH_BOOKING_DATES,
  FETCH_HOTELS,
  FETCH_PRODUCT_DETAILS,
  FETCH_TOURS,
} from 'types/index';

async function fetch(pathName: string): Promise<any> {
  return await (await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}${pathName}`)).json();
}

export const fetchHotels = () => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await fetch('hotels');
  dispatch({ type: FETCH_HOTELS, payload: response });
};

export const fetchTours = () => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await fetch('tours');
  dispatch({ type: FETCH_TOURS, payload: response });
};

export const fetchActivities = () => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await fetch('activities');
  dispatch({ type: FETCH_ACTIVITIES, payload: response });
};

export const fetchProductDetails = (pathName: string) => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await fetch(pathName);
  dispatch({ type: FETCH_PRODUCT_DETAILS, payload: response });
};

export const fetchBookingDates = (pathName: string, month: string, year: string) => async (
  dispatch: Dispatch<FetchActionTypes>
) => {
  const response = await fetch(`${pathName}/${Urls.getBookingDates}month=${month}&year=${year}`);
  dispatch({ type: FETCH_BOOKING_DATES, payload: response });
};
