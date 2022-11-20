import React from 'react';
import { trySignIn } from '@actions/auth';
import { toggleBookingDatePopup, toggleOverlay } from '@actions/uiChange';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { connect } from 'react-redux';
import './Description.css';

interface IDescriptionProps {
  state: IGoogleAuthMapState['auth'];
  description: string;
  productType: 'hotel' | 'tour' | 'activity';
  trySignIn: (auth: any) => void;
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
    if (props.state.isSignedIn) {
      props.toggleOverlay(true);
      props.toggleBookingDatePopup(true);
    } else {
      props.trySignIn(props.state.gapiAuth);
    }
  };

  return (
    <section className="description">
      <h2 className="heading-default description__heading">About this {props.productType}</h2>
      <h2 className="heading-default description__text">{props.description}</h2>
      <ButtonSecondary onButtonClick={() => onReserveBookingButtonClicked()} buttonText="Reserve Booking" />
    </section>
  );
}

interface IGoogleAuthMapState {
  auth: {
    gapiAuth: any;
    isSignedIn: boolean;
  };
}
const mapStateToProps = (state: IGoogleAuthMapState) => ({
  state: state.auth,
});

export default connect(mapStateToProps, { toggleOverlay, toggleBookingDatePopup, trySignIn })(Description);
