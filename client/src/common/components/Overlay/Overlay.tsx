import React from 'react';
import './Overlay.css';

function Overlay(props: { onOverlayClick: (btnType: string) => void }) {
  return <div className="overlay" onClick={() => props.onOverlayClick('')}></div>;
}

export default Overlay;
