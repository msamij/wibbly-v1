import React from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './Description.css';

function Description(props: { productType: 'hotel' | 'tour' | 'activity'; description: string }) {
  return (
    <section className="description">
      <h2 className="heading-default description__heading">About this {props.productType}</h2>
      <h2 className="heading-default description__text">{props.description}</h2>
      <ButtonSecondary buttonText="Reserve Booking" />
    </section>
  );
}

export default Description;
