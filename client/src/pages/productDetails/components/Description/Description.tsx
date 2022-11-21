import React, { useEffect, useState } from 'react';
import { trySignIn } from '@actions/auth';
import { fetchBookingExistsFlag } from '@actions/fetch';
import { toggleBookingDatePopup, toggleOverlay, toggleMessage, setMessageText } from '@actions/uiChange';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { IUserTourBookingExists } from '@http/Models/Tour';
import { connect } from 'react-redux';
import './Description.css';

interface IDescriptionProps {
  description: string;
  state: IGoogleAuthMapState;
  productType: 'hotel' | 'tour' | 'activity';
  setMessageText: (
    message: string
  ) => {
    type: string;
    payload: string;
  };
  toggleMessage: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
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
  fetchBookingExistsFlag: (userId: any) => void;
}

function Description(props: IDescriptionProps) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // When this first time renders user might have a signin session, but since gapi takes some to load
    // We need this condition!
    if (isClicked && props.state.auth.isSignedIn) {
      if (!props.state.fetchedData.userTourBookingExists.userTourBookingsExists) {
        props.toggleOverlay(true);
        props.toggleBookingDatePopup(true);
      } else {
        props.toggleMessage(true);
        props.setMessageText('Already have a booking');
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

interface IGoogleAuthMapState {
  auth: {
    gapiAuth: any;
    isSignedIn: boolean;
  };
  fetchedData: {
    userTourBookingExists: IUserTourBookingExists;
  };
}
const mapStateToProps = (state: IGoogleAuthMapState) => ({
  state,
});

export default connect(mapStateToProps, {
  toggleOverlay,
  toggleBookingDatePopup,
  trySignIn,
  fetchBookingExistsFlag,
  toggleMessage,
  setMessageText,
})(Description);
