import React from 'react';
import './ButtonPrimary.css';
import '../App.css';

interface ButtonClassConfig {
  btnText: string;
  btnType: 'bookings' | 'notifications' | 'profile';
  emoji: any;
}

function ButtonPrimary(props: ButtonClassConfig) {
  return (
    <button className={`btn btn-primary btn__${props.btnType}`}>
      {props.btnText} {props.emoji}
    </button>
  );
}

export default ButtonPrimary;
