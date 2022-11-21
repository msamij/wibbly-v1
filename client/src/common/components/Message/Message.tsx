import React, { useEffect } from 'react';
import { toggleMessage, setMessageText } from '@actions/uiChange';
import { connect } from 'react-redux';
import './Message.css';

interface IMessageProps {
  message: string;
  setMessageText: (
    message: string
  ) => {
    type: string;
    payload: string;
  };
  toggleMessage: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
}

function Message(props: IMessageProps) {
  useEffect(() => {
    setTimeout(() => {
      props.setMessageText('');
      props.toggleMessage(false);
    }, 5000);
  }, []);

  return <div className="message">{props.message}</div>;
}

export default connect(null, { toggleMessage, setMessageText })(Message);
