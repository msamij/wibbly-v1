import React from 'react';
import Input from '@input/Input';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './Form.css';

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="confirm password" />
      <Input type="number" placeholder="credit card no" />
      <ButtonSecondary btnText="Signup" />
    </form>
  );
}

export default Form;
