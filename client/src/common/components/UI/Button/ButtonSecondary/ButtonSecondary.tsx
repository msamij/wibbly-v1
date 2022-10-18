import React from 'react';
import './ButtonSecondary.css';
import '../App.css';

function ButtonSecondary(props: { btnText: string }) {
  return <button className="btn btn-secondary">{props.btnText}</button>;
}

export default ButtonSecondary;
