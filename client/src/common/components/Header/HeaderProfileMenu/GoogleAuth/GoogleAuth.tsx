import React, { useEffect, useState } from 'react';
import { changeAuth, trySignIn, trySignOut, saveGoogleAuthInstance } from '@actions/auth';
import { GoogleAuthConfig } from '@http/constants';
import { ISignIn, IState } from '@globalTypes/types';
import { connect } from 'react-redux';
import GoogleAuthButton from './GoogleAuthButton';

interface IGoogleAuthProps extends ISignIn, IState<IGoogleAuthMapState> {
  trySignOut: (auth: any) => void;
  saveGoogleAuthInstance: (
    gapiAuth: any
  ) => {
    type: string;
    payload: any;
  };
  changeAuth: (isSignedIn: boolean) => void;
}

function GoogleAuth(props: IGoogleAuthProps) {
  const [auth, setAuth] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (auth) {
      props.changeAuth(auth.isSignedIn.get());
      auth.isSignedIn.listen(props.changeAuth);
      props.saveGoogleAuthInstance(auth);
    }
  }, [auth]);

  useEffect(() => {
    try {
      (window as any).gapi.load('client:auth2', async () => {
        await (window as any).gapi.client.init({
          clientId: GoogleAuthConfig.clientId,
          scope: GoogleAuthConfig.scope,
          plugin_name: GoogleAuthConfig.plugin_name,
        });
        setAuth((window as any).gapi.auth2.getAuthInstance());
      });
    } catch (error) {
      // Sometimes however gapi fails to load up, in that case it'll try to load again.
      setError(error);
    }
  }, [error]);

  return props.state.auth.isSignedIn ? (
    <GoogleAuthButton callback={trySignOut(auth)} buttonText="Sign Out" />
  ) : (
    <GoogleAuthButton callback={trySignIn(auth)} buttonText="Sign in with Google" />
  );
}

interface IGoogleAuthMapState {
  auth: {
    isSignedIn: boolean;
  };
}
const mapStateToProps = (state: IGoogleAuthMapState) => ({
  state,
});

export default connect(mapStateToProps, { trySignIn, trySignOut, changeAuth, saveGoogleAuthInstance })(GoogleAuth);
