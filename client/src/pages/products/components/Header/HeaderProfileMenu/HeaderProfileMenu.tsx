import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { HeaderConfig } from '@header/Header';
import React from 'react';
import './HeaderProfileMenu.css';

function HeaderProfileMenu(props: HeaderConfig) {
  return (
    <div className="header__profile-menu">
      {props.buttonType === 'Logout' ? (
        <ButtonSecondary buttonText="Logout" onButtonClick={() => props.onProfileButtonClick('Logout')} />
      ) : (
        <React.Fragment>
          <ButtonSecondary buttonText="Login" onButtonClick={() => props.onProfileButtonClick('Login')} />
          <ButtonSecondary buttonText="Signup" onButtonClick={() => props.onProfileButtonClick('Signup')} />
        </React.Fragment>
      )}
    </div>
  );
}

export default HeaderProfileMenu;
