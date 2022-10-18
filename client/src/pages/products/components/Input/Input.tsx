import React from 'react';
import './Input.css';

interface InputMetaData {
  type: 'text' | 'password' | 'number';
  placeholder: string;
}

function Input(props: InputMetaData) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

export default Input;
