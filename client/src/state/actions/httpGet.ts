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
  USER_BOOKING_EXISTS,
} from 'types/index';

async function httpGET(pathName: string): Promise<any> {
  return await (await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}${pathName}`)).json();
}

export const fetchHotels = () => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await httpGET('hotels');
  dispatch({ type: FETCH_HOTELS, payload: response });
};

export const fetchTours = () => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await httpGET('tours');
  dispatch({ type: FETCH_TOURS, payload: response });
};

export const fetchActivities = () => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await httpGET('activities');
  dispatch({ type: FETCH_ACTIVITIES, payload: response });
};

export const fetchProductDetails = (pathName: string) => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await httpGET(pathName);
  dispatch({ type: FETCH_PRODUCT_DETAILS, payload: response });
};

export const fetchBookingDates = (pathName: string, month: string, year: string) => async (
  dispatch: Dispatch<FetchActionTypes>
) => {
  const response = await httpGET(`${pathName}/${Urls.bookingDates}?month=${month}&year=${year}`);
  dispatch({ type: FETCH_BOOKING_DATES, payload: response });
};

export const fetchBookingExistsFlag = (productType: 'hotels' | 'tours' | 'activities', userId: any) => async (
  dispatch: Dispatch<FetchActionTypes>
) => {
  const selectedProduct = {
    tours: Urls.tourBookings,
    hotels: Urls.hotelBookings,
    activities: Urls.activityBookings,
  };
  const response = await httpGET(`${Urls.users}${userId}/${selectedProduct[productType]}/${Urls.exists}`);
  dispatch({ type: USER_BOOKING_EXISTS, payload: response });
};
