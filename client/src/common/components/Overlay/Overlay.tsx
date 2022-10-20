import React from 'react';
import './Overlay.css';

function Overlay(props: { onProfileButtonClick: (btnType: string) => void }) {
  return <div className="overlay" onClick={() => props.onProfileButtonClick('')}></div>;
}

export default Overlay;
