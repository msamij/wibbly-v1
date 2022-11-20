import React from 'react';
import './PopupMessage.css';

function PopupMessage(props: { messageText: string }) {
  return <h2 className="popup__message">{props.messageText}</h2>;
}

export default PopupMessage;
