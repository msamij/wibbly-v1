import React from 'react';
import { productTypePlural } from '@globalTypes/types';
import './Figure.css';

interface IFigureResponseProps {
  name: string;
  image: string;
  price: number;
  duration?: number;
  noOfRooms?: number;
  productType: productTypePlural;
}

function Figure(props: IFigureResponseProps) {
  const getSubTitle = () => {
    if (props.productType === 'hotels') {
      return <span className="figure__title--sub">{props.noOfRooms} rooms</span>;
    } else if (props.productType === 'tours') {
      return <span className="figure__title--sub">{props.duration} days tour</span>;
    }
  };

  return (
    <figure className="figure">
      <React.Fragment>
        <img src={props.image} alt="Image" className="figure__image" />
        <h2 className="heading-default figure__title">
          {props.name}, {getSubTitle()}
        </h2>
        <h2 className="heading-default figure__price">
          {props.price}$ {`${props.productType === 'hotels' ? 'night' : ''}`}
        </h2>
      </React.Fragment>
    </figure>
  );
}

export default Figure;
