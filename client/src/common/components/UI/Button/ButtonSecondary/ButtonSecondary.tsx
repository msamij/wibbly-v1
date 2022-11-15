import React from 'react';
import '../App.css';
import './ButtonSecondary.css';

interface IButtonSecondary {
  buttonText: string;
  onButtonClick: Function;
}

function ButtonSecondary(props: IButtonSecondary) {
  return (
    <button
      className="btn btn-secondary"
      onClick={() => props.onButtonClick() as React.MouseEventHandler<HTMLButtonElement>}
    >
      {props.buttonText}
    </button>
  );
}

export default ButtonSecondary;
