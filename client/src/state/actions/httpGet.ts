import { productTypePlural } from '@globalTypes/types';
import { BaseUrls, ResourceEndPoints, Resources } from '@http/constants';
import HTTP from '@http/http';
import { Dispatch } from 'redux';
import {
  FetchActionTypes,
  FETCH_ACTIVITIES,
  FETCH_BOOKING_DATES,
  FETCH_HOTELS,
  FETCH_PRODUCT_DETAILS,
  FETCH_TOURS,
  FETCH_USER_BOOKINGS,
  FETCH_USER_BOOKING_EXISTS_FLAG,
} from 'types/index';

async function httpGET(pathName: string): Promise<any> {
  return await (await HTTP.get(`${BaseUrls.localHost}${BaseUrls.baseApi}${pathName}`)).json();
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
  const response = await httpGET(`${pathName}/${ResourceEndPoints.bookingDates}?month=${month}&year=${year}`);
  dispatch({ type: FETCH_BOOKING_DATES, payload: response });
};

export const fetchUserBookings = (userId: string) => async (dispatch: Dispatch<FetchActionTypes>) => {
  const response = await httpGET(`${Resources.users}${userId}/${ResourceEndPoints.bookings}`);
  dispatch({ type: FETCH_USER_BOOKINGS, payload: response });
};

export const fetchBookingExistsFlag = (productType: productTypePlural, userId: string) => async (
  dispatch: Dispatch<FetchActionTypes>
) => {
  const selectedProduct = {
    tours: Resources.tourBookings,
    hotels: Resources.hotelBookings,
    activities: Resources.activityBookings,
  };

  const response = await httpGET(
    `${Resources.users}${userId}/${selectedProduct[productType]}${ResourceEndPoints.exists}`
  );
  dispatch({ type: FETCH_USER_BOOKING_EXISTS_FLAG, payload: response });
};
