import React from 'react';
import Figure from '@figure/Figure';
import { productTypePlural } from '@globalTypes/types';
import { activityResponse, IActivityResponse } from '@models/Activity';
import { hotelsResponse, IHotelResponse } from '@models/Hotel';
import { ITourResponse, toursResponse } from '@models/Tour';
import { Link } from 'react-router-dom';
import './FigureContainer.css';

interface IFigureContainerProps {
  figureType: productTypePlural;
  response: hotelsResponse | toursResponse | activityResponse;
}
interface IResponse extends IHotelResponse, ITourResponse, IActivityResponse {}

function FigureContainer(props: IFigureContainerProps) {
  const returnFigureBasedOnFigureType = (response: IResponse) => {
    if (props.figureType === 'hotels') {
      return (
        <Link to={`/hotels/${response.name}`} key={response.id}>
          <Figure
            productType="hotels"
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
            productType="tours"
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
            productType="activities"
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
      {props.response.map((response: any) => {
        return returnFigureBasedOnFigureType(response);
      })}
    </div>
  );
}

export default FigureContainer;
