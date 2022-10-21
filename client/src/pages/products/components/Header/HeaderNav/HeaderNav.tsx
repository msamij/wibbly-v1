import React from 'react';
import ButtonPrimary from '@button/ButtonPrimary/ButtonPrimary';
import { HeaderConfig } from '@header/Header';
import HeaderProfileMenu from '@headerProfileMenu/HeaderProfileMenu';
import './HeaderNav.css';

function HeaderNav(props: HeaderConfig) {
  return (
    <div className="header__nav">
      <ButtonPrimary btnType="bookings" btnText="My Bookings" emoji={'🔖'}></ButtonPrimary>
      <ButtonPrimary btnType="notifications" btnText="Notifications" emoji={'🔔'}></ButtonPrimary>
      <ButtonPrimary btnType="profile" btnText="Profile" emoji={'👤'}></ButtonPrimary>
      <HeaderProfileMenu buttonType={props.buttonType} onProfileButtonClick={props.onProfileButtonClick} />
    </div>
  );
}

export default HeaderNav;
