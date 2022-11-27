import React from 'react';
import { toggleBookingDatePopup, toggleBookingListPopup, toggleOverlay } from '@actions/uiChange';
import { IToggleBookingDate, IToggleBookingList, IToggleOverlay } from '@globalTypes/types';
import { connect } from 'react-redux';
import './Overlay.css';

interface IOverlayProps extends IToggleOverlay, IToggleBookingDate, IToggleBookingList {}

function Overlay(props: IOverlayProps) {
  const onOverlayClick = () => {
    props.toggleOverlay(false);
    props.toggleBookingDatePopup(false);
    props.toggleBookingListPopup(false);
  };
  return <div className="overlay" onClick={() => onOverlayClick()}></div>;
}

export default connect(null, { toggleOverlay, toggleBookingDatePopup, toggleBookingListPopup })(Overlay);
