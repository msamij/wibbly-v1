import { Urls } from '@http/constants';
import HTTP from '@http/http';
import { Dispatch } from 'react';
import {
  ActionTypes,
  FETCH_ACTIVITIES,
  FETCH_BOOKING_DATES,
  FETCH_HOTELS,
  FETCH_PRODUCT,
  FETCH_TOURS,
} from 'types/actions';

async function fetch(pathName: string): Promise<any> {
  return await (await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}${pathName}`)).json();
}

export const fetchHotels = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await fetch('hotels');
  dispatch({ type: FETCH_HOTELS, payload: response });
};

export const fetchTours = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await fetch('tours');
  dispatch({ type: FETCH_TOURS, payload: response });
};

export const fetchActivities = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await fetch('activities');
  dispatch({ type: FETCH_ACTIVITIES, payload: response });
};

export const fetchProductDetails = (pathName: string) => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await fetch(pathName);
  dispatch({ type: FETCH_PRODUCT, payload: response });
};

export const fetchBookingDates = (pathName: string, month: string, year: string) => async (
  dispatch: Dispatch<ActionTypes>
) => {
  const response = await fetch(`${pathName}/${Urls.getBookingDates}month=${month}&year=${year}`);
  console.log(response);
  dispatch({ type: FETCH_BOOKING_DATES, payload: response });
};
