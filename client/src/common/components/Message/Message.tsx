import React, { useEffect } from 'react';
import { toggleMessage } from '@actions/uiChange';
import { connect } from 'react-redux';
import './Message.css';

interface IMessageProps {
  state: IMessageMapState['uiChange'];
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
      props.toggleMessage(false);
    }, 5000);
  }, []);

  return <div className="message">{props.state.messageText}</div>;
}

interface IMessageMapState {
  uiChange: {
    messageText: string;
  };
}
const mapStateToProps = (state: IMessageMapState) => ({
  state: state.uiChange,
});

export default connect(mapStateToProps, { toggleMessage })(Message);
