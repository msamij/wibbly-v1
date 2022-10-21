const onFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
  event.preventDefault();
  let results = null;

  //   (async () => {
  //     results = await HTTP.post(`${Urls.baseUrl}${Urls.authUrl}${props.buttonType.toLowerCase()}`, {
  //       username,
  //       password1,
  //       password2,
  //       credit_card_no: +creditCardNo,
  //     });
  //   })();
};

export default onFormSubmit;
