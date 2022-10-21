import React, { useEffect } from 'react';
import './Message.css';

interface MessageConfig {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function Message(props: MessageConfig) {
  useEffect(() => {
    setTimeout(() => {
      props.setMessage('');
    }, 5000);
  }, []);

  return <div className="message">{props.message}</div>;
}

export default Message;
