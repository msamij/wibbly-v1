import React from 'react';
import Input from '@input/Input';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './Form.css';

function Form(props: { buttonType: string }) {
  function getInputsForSignupForm() {
    return (
      <React.Fragment>
        <Input type="password" placeholder="confirm password" />
        <Input type="number" placeholder="credit card no" />
      </React.Fragment>
    );
  }

  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      {props.buttonType === 'Signup' ? getInputsForSignupForm() : ''}
      <ButtonSecondary btnText={props.buttonType} />
    </form>
  );
}

export default Form;
