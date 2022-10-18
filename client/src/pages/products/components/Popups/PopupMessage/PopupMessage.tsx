import React from 'react';
import './PopupMessage.css';

function PopupMessage(messageText: string) {
  return <h2 className="popup__message">{messageText}</h2>;
}

export default PopupMessage;
