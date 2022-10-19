import React from 'react';
import '../App.css';
import './ButtonSecondary.css';

function ButtonSecondary(props: { btnText: string }) {
  return <button className="btn btn-secondary">{props.btnText}</button>;
}

export default ButtonSecondary;
