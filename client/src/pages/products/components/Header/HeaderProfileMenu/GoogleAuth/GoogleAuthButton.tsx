import React, { useEffect } from 'react';

interface IGoogleAuthButtonProps {
  buttonText: string;
  callback: () => void;
}

function GoogleAuthButton(props: IGoogleAuthButtonProps) {
  return (
    <button onClick={() => props.callback()} className="ui red button" style={{ fontSize: '1.3rem' }}>
      <i className="google icon"></i>
      {props.buttonText}
    </button>
  );
}

export default GoogleAuthButton;
