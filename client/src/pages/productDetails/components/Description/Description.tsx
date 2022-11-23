import React, { useEffect, useState } from 'react';
import { trySignIn } from '@actions/auth';
import { fetchBookingExistsFlag } from '@actions/httpGet';
import { setMessageText, toggleBookingDatePopup, toggleMessage, toggleOverlay } from '@actions/uiChange';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { connect } from 'react-redux';
import './Description.css';
import { IDescriptionProps, IDescriptionMapState } from './types';

function Description(props: IDescriptionProps) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // When this component first time renders, User might have a signin session, but since gapi takes some to load
    // We need this condition!
    if (isClicked && props.state.auth.isSignedIn) {
      if (!props.state.fetchedData.userTourBookingExists.userTourBookingsExists) {
        props.toggleOverlay(true);
        props.toggleBookingDatePopup(true);
      } else {
        props.toggleMessage(true);
        props.setMessageText('Already have a booking for this product!');
      }
    }
  }, [props.state.fetchedData.userTourBookingExists]);

  const onReserveBookingButtonClicked = () => {
    // We have to account for that the user instantly clicks on this button, however gapi is not loaded
    // Wait until it loads, then proceed
    if (props.state.auth.gapiAuth) {
      if (props.state.auth.isSignedIn)
        props.fetchBookingExistsFlag(props.state.auth.gapiAuth.currentUser.get().getId());
      else props.trySignIn(props.state.auth.gapiAuth);
    }
    setIsClicked(true);
  };

  return (
    <section className="description">
      <h2 className="heading-default description__heading">About this {props.productType}</h2>
      <h2 className="heading-default description__text">{props.description}</h2>
      <ButtonSecondary onButtonClick={() => onReserveBookingButtonClicked()} buttonText="Reserve Booking" />
    </section>
  );
}

const mapStateToProps = (state: IDescriptionMapState) => ({
  state,
});

export default connect(mapStateToProps, {
  trySignIn,
  toggleOverlay,
  toggleMessage,
  setMessageText,
  fetchBookingExistsFlag,
  toggleBookingDatePopup,
})(Description);
