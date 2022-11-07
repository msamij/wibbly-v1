import { changeAuth, trySignIn, trySignOut } from '@actions/auth';
import React from 'react';
import { connect } from 'react-redux';

interface IGoogleAuthState {
  auth: {
    isSignedIn: boolean;
  };
}
interface IMainProps {
  state: IGoogleAuthState;
  trySignIn: (auth: any) => void;
  trySignOut: (auth: any) => void;
  changeAuth: (isSignedIn: boolean) => void;
}

class GoogleAuth extends React.Component<IMainProps> {
  private auth: any;

  componentDidMount(): void {
    (window as any).gapi.load('client:auth2', async () => {
      await (window as any).gapi.client.init({
        clientId: '960507316821-h8tc4fapcfacfhd6tlikjpb88aodv9so.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'wibbly-v1',
      });
      this.auth = (window as any).gapi.auth2.getAuthInstance();
      this.props.changeAuth(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.props.changeAuth);
    });
  }

  renderAuthButton() {
    if (this.props.state.auth.isSignedIn) {
      return (
        <button onClick={() => this.props.trySignOut(this.auth)} className="ui red google button">
          <i className="google icon"></i>
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={() => this.props.trySignIn(this.auth)} className="ui red google button">
          <i className="google icon"></i>
          Sign In with google
        </button>
      );
    }
  }

  render(): React.ReactNode {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state: IGoogleAuthState) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { trySignIn, trySignOut, changeAuth })(GoogleAuth);
