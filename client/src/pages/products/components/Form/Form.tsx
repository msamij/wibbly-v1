import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import Urls from '@http/constants';
import HTTP from '@http/http';
import Input from '@input/Input';
import React, { useState } from 'react';
import './Form.css';

interface FormConfig {
  buttonType: string;
  upDateMessage: React.Dispatch<React.SetStateAction<string>>;
  upDateButtonType: React.Dispatch<React.SetStateAction<string>>;
}

function Form(props: FormConfig) {
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

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    (async () => {
      const response = await HTTP.post(`${Urls.baseUrl}${Urls.authUrl}${props.buttonType.toLowerCase()}`, {
        username,
        password1,
        password2,
        credit_card_no: +creditCardNo,
      });
      setUsername('');
      setPassword1('');
      setPassword2('');
      setCreditCardNo('');
      const jsonResponse = await response.json();

      props.upDateMessage(jsonResponse);
      if (response.status === 200 || response.status === 201) props.upDateButtonType('Logout');
    })();
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
