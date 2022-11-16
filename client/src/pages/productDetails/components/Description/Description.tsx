import React from 'react';
import { toggleOverlay, toggleBookingDatePopup } from '@actions/uiChange';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { connect } from 'react-redux';
import './Description.css';

interface IDescriptionProps {
  description: string;
  productType: 'hotel' | 'tour' | 'activity';
  toggleOverlay: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
  toggleBookingDatePopup: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
}

function Description(props: IDescriptionProps) {
  const onReserveBookingButtonClicked = () => {
    props.toggleOverlay(true);
    props.toggleBookingDatePopup(true);
  };

  return (
    <section className="description">
      <h2 className="heading-default description__heading">About this {props.productType}</h2>
      <h2 className="heading-default description__text">{props.description}</h2>
      <ButtonSecondary onButtonClick={() => onReserveBookingButtonClicked()} buttonText="Reserve Booking" />
    </section>
  );
}

export default connect(null, { toggleOverlay, toggleBookingDatePopup })(Description);
