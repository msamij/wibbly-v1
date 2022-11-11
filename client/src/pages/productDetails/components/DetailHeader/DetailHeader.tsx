import React from 'react';
import './DetailHeader.css';

interface IHeaderProps {
  name: string;
  price: number;
  type?: 'hotel';
  title1?: string;
  title2?: string;
}

function DetailHeader(props: IHeaderProps) {
  const returnSecondaryHeading = () => {
    return (
      props.title1 &&
      props.title2 && (
        <h2 className="heading-default heading-secondary">
          <span className="heading-secondary--1">{props.title1}</span>
          <span className="heading-secondary--2">{props.title2}</span>
        </h2>
      )
    );
  };

  return (
    <header className="product-detail-header">
      <div>
        <h2 className="heading-default heading-primary--bold">{props.name}</h2>
        {returnSecondaryHeading()}
        <h2 className="heading-default heading-price">
          {props.price}$ {props.type && 'per night'}
        </h2>
      </div>
    </header>
  );
}

export default DetailHeader;
