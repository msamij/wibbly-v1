import React from 'react';
import Figure from '@figure/Figure';
import './FigureContainer.css';
import { hotelsResponse, toursResponse, activityResponse } from '@responseData/ResponseData';

export interface FigureContainerConfig {
  figureType?: 'hotels' | 'activities' | 'tours';
  response: hotelsResponse | toursResponse | activityResponse;
}

function FigureContainer(props: FigureContainerConfig) {
  const getFigureBasedOnFigureType = (response: any, index: number) => {
    if (props.figureType === 'hotels') {
      return (
        <Figure
          key={response.id}
          figureType="hotels"
          name={response.name}
          price={response.price_per_night}
          noOfRooms={response.no_of_rooms}
          image={response.hotel_images[0]}
        />
      );
    } else if (props.figureType === 'tours') {
      return (
        <Figure
          key={response.id}
          figureType="tours"
          name={response.name}
          price={response.price}
          duration={response.duration}
          image={response.tour_images[0]}
        />
      );
    } else if (props.figureType === 'activities') {
      return (
        <Figure
          key={response.id}
          figureType="activities"
          name={response.name}
          price={response.price}
          image={response.activity_images[0]}
        />
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
