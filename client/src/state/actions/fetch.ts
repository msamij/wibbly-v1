import Urls from '@http/constants';
import HTTP from '@http/http';
import { Dispatch } from 'react';
import { ActionTypes, FETCH_ACTIVITIES, FETCH_HOTELS, FETCH_TOURS } from 'types/actions';

export const fetchHotels = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await (await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}hotels`)).json();
  dispatch({ type: FETCH_HOTELS, payload: response });
};

export const fetchTours = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await (await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}tours`)).json();
  dispatch({ type: FETCH_TOURS, payload: response });
};

export const fetchActivities = () => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await (await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}activities`)).json();
  dispatch({ type: FETCH_ACTIVITIES, payload: response });
};
