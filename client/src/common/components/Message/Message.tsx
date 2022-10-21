import React, { useEffect } from 'react';
import './Message.css';

function Message(props: { message: string; setMessage: Function }) {
  useEffect(() => {
    setTimeout(() => {
      props.setMessage('');
    }, 5000);
  }, []);

  return <div className="message">{props.message}</div>;
}

export default Message;
