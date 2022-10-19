import React from 'react';
import './Input.css';

interface InputConfig {
  placeholder: string;
  type: 'text' | 'password' | 'number';
}

function Input(props: InputConfig) {
  return <input className="input" type={props.type} placeholder={props.placeholder} />;
}

export default Input;
