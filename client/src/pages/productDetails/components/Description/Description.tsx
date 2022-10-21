import React from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './Description.css';

function Description() {
  return (
    <section className="description">
      <h2 className="heading-default description__heading">About this Hotel</h2>
      <h2 className="heading-default description__text">
        Dracula runs a high-end resort for monsters, meet drac, mavis, jonathan and all the monsters there.
      </h2>
      <ButtonSecondary buttonText="Reserve Booking" />
    </section>
  );
}

export default Description;
