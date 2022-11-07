import React from 'react';
import GoogleAuth from '@headerProfileMenu/GoogleAuth/GoogleAuth';
import './HeaderProfileMenu.css';

function HeaderProfileMenu() {
  return (
    <div className="header__profile-menu">
      <GoogleAuth />
    </div>
  );
}

export default HeaderProfileMenu;
