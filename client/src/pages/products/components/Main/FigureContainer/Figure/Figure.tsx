import React from 'react';
import './Figure.css';

interface IResponse {
  name: string;
  image: string;
  price: number;
  duration?: number;
  noOfRooms?: number;
  figureType: 'hotels' | 'activities' | 'tours';
}

function Figure(props: IResponse) {
  const getSubTitle = () => {
    if (props.figureType === 'hotels') {
      return <span className="figure__title--sub">{props.noOfRooms} rooms</span>;
    } else if (props.figureType === 'tours') {
      return <span className="figure__title--sub">{props.duration} days tour</span>;
    }
  };

  return (
    <figure className="figure">
      <a href={`/${props.figureType}/${props.name}`} className="figure__link">
        <img src={props.image} alt="Image" className="figure__image" />
        <h2 className="heading-default figure__title">
          {props.name}, {getSubTitle()}
        </h2>
        <h2 className="heading-default figure__price">
          {props.price}$ {`${props.figureType === 'hotels' ? 'night' : ''}`}
        </h2>
      </a>
    </figure>
  );
}

export default Figure;
