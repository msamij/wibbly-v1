import React, { useState } from 'react';
import axios from 'axios';
import Input from '@input/Input';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { csrfToken } from '@csrftoken/token';
import './Form.css';

function Form(props: { buttonType: string }) {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [creditCardNo, setCreditCardNo] = useState('');

  const onUsernameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setUsername(event.target.value);
  };

  const onPassword1Change: React.ChangeEventHandler<HTMLInputElement> = event => {
    setPassword1(event.target.value);
  };

  const onPassword2Change: React.ChangeEventHandler<HTMLInputElement> = event => {
    setPassword2(event.target.value);
  };

  const onCreditCardChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setCreditCardNo(event.target.value);
  };

  const getInputsForSignupForm = () => {
    return (
      <React.Fragment>
        <Input
          onInputChange={onPassword2Change}
          currentValue={password2}
          type="password"
          placeholder="confirm password"
        />
        <Input
          onInputChange={onCreditCardChange}
          currentValue={creditCardNo}
          type="number"
          placeholder="credit card no"
        />
      </React.Fragment>
    );
  };

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    let results;

    (async () => {
      results = await fetch('http://127.0.0.1:8000/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password1: password1,
          password2: password2,
          credit_card_no: creditCardNo,
        }),
      });

      // results = await axios.post(
      //   'http://127.0.0.1:8000/api/v1/auth/signup',
      //   {
      //     username: username,
      //     password1: password1,
      //     password2: password2,
      //     credit_card_no: creditCardNo,
      //   },
      //   {
      //     headers: {
      //       'X-CSRFToken': csrfToken('csrftoken'),
      //       // 'Access-Control-Allow-Origin': '*',
      //       // 'Access-Control-Allow-Headers': '*',
      //     },
      //   }
      // );

      const res = await results.json();
      console.log(res);
    })();
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <Input onInputChange={onUsernameChange} currentValue={username} type="text" placeholder="username" />
      <Input onInputChange={onPassword1Change} currentValue={password1} type="password" placeholder="password" />
      {props.buttonType === 'Signup' ? getInputsForSignupForm() : ''}
      <ButtonSecondary buttonText={props.buttonType} />
    </form>
  );
}

export default Form;
