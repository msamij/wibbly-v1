import React from 'react';
import ButtonPrimary from '@button/ButtonPrimary/ButtonPrimary';
import HeaderProfileMenu from '@headerProfileMenu/HeaderProfileMenu';
import './HeaderNav.css';

function HeaderNav() {
  return (
    <div className="header__nav">
      <ButtonPrimary btnType="bookings" btnText="My Bookings"></ButtonPrimary>
      <ButtonPrimary btnType="notifications" btnText="Notifications"></ButtonPrimary>
      <ButtonPrimary btnType="profile" btnText="Profile"></ButtonPrimary>
      <HeaderProfileMenu />
    </div>
  );
}

export default HeaderNav;
