import React from 'react';
import Figure from '@figure/Figure';
import {
  activityResponse,
  hotelsResponse,
  IActivityResponse,
  IHotelResponse,
  ITourResponse,
  toursResponse,
} from 'types/response';
import './FigureContainer.css';
import { Link } from 'react-router-dom';

interface IFigureContainerConfig {
  figureType: 'hotels' | 'activities' | 'tours';
  response: hotelsResponse | toursResponse | activityResponse;
}

interface IResponse extends IHotelResponse, ITourResponse, IActivityResponse {}

function FigureContainer(props: IFigureContainerConfig) {
  const getFigureBasedOnFigureType = (response: IResponse, index: number) => {
    if (props.figureType === 'hotels') {
      return (
        <Link to={`/hotels/${response.name}`} key={response.id}>
          <Figure
            figureType="hotels"
            name={response.name}
            price={response.price_per_night}
            noOfRooms={response.no_of_rooms}
            image={response.hotel_images[0]}
          />
        </Link>
      );
    } else if (props.figureType === 'tours') {
      return (
        <Link to={`/tours/${response.name}`} key={response.id}>
          <Figure
            figureType="tours"
            name={response.name}
            price={response.price}
            duration={response.duration}
            image={response.tour_images[0]}
          />
        </Link>
      );
    } else if (props.figureType === 'activities') {
      return (
        <Link to={`activities/${response.name}`} key={response.id}>
          <Figure
            figureType="activities"
            name={response.name}
            price={response.price}
            image={response.activity_images[0]}
          />
        </Link>
      );
    }
  };

  return (
    <div className="figure-container">
      {props.response.map((response: any, index: number) => {
        return getFigureBasedOnFigureType(response, index);
      })}
    </div>
  );
}

export default FigureContainer;
