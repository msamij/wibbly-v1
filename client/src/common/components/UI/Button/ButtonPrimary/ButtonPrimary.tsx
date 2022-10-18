import React from 'react';
import './ButtonPrimary.css';
import '../App.css';

interface ButtonClassConfig {
  btnText: string;
  btnType: 'bookings' | 'notifications' | 'profile';
}

function ButtonPrimary(props: ButtonClassConfig) {
  return (
    <button className={`btn btn-primary btn__${props.btnType}`}>
      {props.btnText}
      <svg className="btn__icon">
        <use xlinkHref=""></use>
      </svg>
    </button>
  );
}

export default ButtonPrimary;
