import React from 'react';
import '../App.css';
import './ButtonSecondary.css';

interface ButtonConfig {
  btnText: string;
  onButtonClick?: any;
}

function ButtonSecondary(props: ButtonConfig) {
  return (
    <button className="btn btn-secondary" onClick={props.onButtonClick}>
      {props.btnText}
    </button>
  );
}

export default ButtonSecondary;
