import React from 'react';
import { toggleBookingListPopup, toggleOverlay } from '@actions/uiChange';
import ButtonPrimary from '@button/ButtonPrimary/ButtonPrimary';
import { IToggleBookingList, IToggleOverlay } from '@globalTypes/types';
import HeaderProfileMenu from '@headerProfileMenu/HeaderProfileMenu';
import { connect } from 'react-redux';
import './HeaderNav.css';

interface IHeaderNavProps extends IToggleOverlay, IToggleBookingList {}

function HeaderNav(props: IHeaderNavProps) {
  const onMyBookingsButtonClick = () => {
    props.toggleOverlay(true);
    props.toggleBookingListPopup(true);
  };

  return (
    <div className="header__nav">
      <ButtonPrimary
        btnType="bookings"
        btnText="My Bookings"
        emoji={'🔖'}
        onButtonClick={() => onMyBookingsButtonClick()}
      ></ButtonPrimary>
      <ButtonPrimary btnType="notifications" btnText="Notifications" emoji={'🔔'}></ButtonPrimary>
      <ButtonPrimary btnType="profile" btnText="Profile" emoji={'👤'}></ButtonPrimary>
      <HeaderProfileMenu />
    </div>
  );
}

export default connect(null, { toggleBookingListPopup, toggleOverlay })(HeaderNav);
