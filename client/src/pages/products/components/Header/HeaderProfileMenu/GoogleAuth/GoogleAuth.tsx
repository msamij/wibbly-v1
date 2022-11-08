import { changeAuth, trySignIn, trySignOut } from '@actions/auth';
import React, { useEffect, useState } from 'react';
import GoogleAuthButton from './GoogleAuthButton';
import { connect } from 'react-redux';

interface IGoogleAuthState {
  auth: {
    isSignedIn: boolean;
  };
}
interface IGoogleAuthProps {
  state: IGoogleAuthState;
  trySignIn: (auth: any) => void;
  trySignOut: (auth: any) => void;
  changeAuth: (isSignedIn: boolean) => void;
}

function GoogleAuth(props: IGoogleAuthProps) {
  const [auth, setAuth] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (auth) {
      props.changeAuth(auth.isSignedIn.get());
      auth.isSignedIn.listen(props.changeAuth);
    }
  }, [auth]);

  useEffect(() => {
    try {
      (window as any).gapi.load('client:auth2', async () => {
        await (window as any).gapi.client.init({
          clientId: '960507316821-h8tc4fapcfacfhd6tlikjpb88aodv9so.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'wibbly-v1',
        });
        setAuth((window as any).gapi.auth2.getAuthInstance());
      });
    } catch (error) {
      setError(error);
    }
  }, [error]);

  return props.state.auth.isSignedIn ? (
    <GoogleAuthButton callback={trySignOut(auth)} buttonText="Sign Out" />
  ) : (
    <GoogleAuthButton callback={trySignIn(auth)} buttonText="Sign in with Google" />
  );
}

const mapStateToProps = (state: IGoogleAuthState) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { trySignIn, trySignOut, changeAuth })(GoogleAuth);
