import React from 'react';
import '../App.css';
import './ButtonPrimary.css';

interface IButtonClassProps {
  emoji: any;
  btnText: string;
  onButtonClick?: Function;
  btnType: 'bookings' | 'notifications' | 'profile';
}

function ButtonPrimary(props: IButtonClassProps) {
  return (
    <button
      className={`btn btn-primary btn__${props.btnType}`}
      onClick={() => props.onButtonClick && props.onButtonClick()}
    >
      {props.btnText} {props.emoji}
    </button>
  );
}

export default ButtonPrimary;
