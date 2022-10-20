import React from 'react';
import ButtonPrimary from '@button/ButtonPrimary/ButtonPrimary';
import HeaderProfileMenu from '@headerProfileMenu/HeaderProfileMenu';
import './HeaderNav.css';

function HeaderNav(props: { onProfileButtonClick: (btnType: string) => void }) {
  return (
    <div className="header__nav">
      <ButtonPrimary btnType="bookings" btnText="My Bookings" emoji={'🔖'}></ButtonPrimary>
      <ButtonPrimary btnType="notifications" btnText="Notifications" emoji={'🔔'}></ButtonPrimary>
      <ButtonPrimary btnType="profile" btnText="Profile" emoji={'👤'}></ButtonPrimary>
      <HeaderProfileMenu onProfileButtonClick={props.onProfileButtonClick} />
    </div>
  );
}

export default HeaderNav;
