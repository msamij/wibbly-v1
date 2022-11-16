import React from 'react';
import { toggleBookingDatePopup, toggleOverlay } from '@actions/uiChange';
import { connect } from 'react-redux';
import './Overlay.css';

interface IOverlayProps {
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

function Overlay(props: IOverlayProps) {
  const onOverlayClick = () => {
    props.toggleOverlay(false);
    props.toggleBookingDatePopup(false);
  };
  return <div className="overlay" onClick={() => onOverlayClick()}></div>;
}

export default connect(null, { toggleOverlay, toggleBookingDatePopup })(Overlay);
