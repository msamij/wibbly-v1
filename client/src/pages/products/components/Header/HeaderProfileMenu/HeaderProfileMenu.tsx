import React from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './HeaderProfileMenu.css';

function HeaderProfileMenu(props: { onProfileButtonClick: (btnType: string) => void }) {
  return (
    <div className="header__profile-menu">
      <ButtonSecondary btnText="Login" onButtonClick={() => props.onProfileButtonClick('Login')} />
      <ButtonSecondary btnText="Signup" onButtonClick={() => props.onProfileButtonClick('Signup')} />
    </div>
  );
}

export default HeaderProfileMenu;
