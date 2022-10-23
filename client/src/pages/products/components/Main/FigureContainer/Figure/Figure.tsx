import React from 'react';
import './Figure.css';
import { FigureContainerConfig } from '../FigureContainer';

interface HotelResponseData {
  no_of_rooms: number;
  price_per_night: number;
  hotel_images: [string];
}

interface TourResponseData {
  price: number;
  duration: number;
  tour_images: [string];
}

interface ActivityResponseData {
  price: number;
  activity_images: [string];
}

interface ResponseData extends HotelResponseData, TourResponseData, ActivityResponseData {
  id: number;
  name: string;
}

interface FigureConfig {
  figureType?: any;
  responseData?: any;
  index?: number;
}

function Figure(props: FigureConfig) {
  if (props.responseData) {
    console.log(props.figureType);
    console.log(props.responseData);
    console.log(props.index);
  }

  return (
    <figure className="figure">
      <a href="#" className="figure__link">
        <img src={``} alt="Hotel Image" className="figure__image" />
        <h2 className="heading-default figure__title">
          Transalvania, <span className="figure__rooms">100 rooms</span>
        </h2>
        <h2 className="heading-default figure__price">400$ night</h2>
      </a>
    </figure>
  );
}

export default Figure;
