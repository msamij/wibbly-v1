import React from 'react';
import './Input.css';

interface InputConfig {
  placeholder: string;
  type: 'text' | 'password' | 'number';
  currentValue: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input(props: InputConfig) {
  return (
    <input
      onChange={props.onInputChange}
      value={props.currentValue}
      className="input"
      required
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
