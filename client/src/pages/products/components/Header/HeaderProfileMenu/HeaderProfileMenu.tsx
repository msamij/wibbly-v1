import React from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './HeaderProfileMenu.css';

function HeaderProfileMenu() {
  return (
    <div className="header__profile-menu">
      <ButtonSecondary btnText="Login" />
      <ButtonSecondary btnText="Signup" />
    </div>
  );
}

export default HeaderProfileMenu;
