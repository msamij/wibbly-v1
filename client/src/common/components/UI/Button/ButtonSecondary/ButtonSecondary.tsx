import React from 'react';
import '../App.css';
import './ButtonSecondary.css';

interface ButtonConfig {
  buttonText: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonSecondary(props: ButtonConfig) {
  return (
    <button className="btn btn-secondary" onClick={props.onButtonClick}>
      {props.buttonText}
    </button>
  );
}

export default ButtonSecondary;
