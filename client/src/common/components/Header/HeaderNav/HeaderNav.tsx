import React from 'react';
import { toggleBookingListPopup, toggleOverlay } from '@actions/uiChange';
import ButtonPrimary from '@button/ButtonPrimary/ButtonPrimary';
import { isSignedIn } from '@http/utils';
import { IState, IToggleBookingList, IToggleOverlay } from '@globalTypes/types';
import HeaderProfileMenu from '@headerProfileMenu/HeaderProfileMenu';
import { connect } from 'react-redux';
import './HeaderNav.css';

interface IHeaderNavProps extends IState<IDescriptionMapState>, IToggleOverlay, IToggleBookingList {}

function HeaderNav(props: IHeaderNavProps) {
  const onMyBookingsButtonClick = () => {
    props.toggleOverlay(true);
    props.toggleBookingListPopup(true);
  };

  return (
    <div className="header__nav">
      {isSignedIn(props.state.auth) && (
        <React.Fragment>
          <ButtonPrimary
            btnType="bookings"
            btnText="My Bookings"
            emoji={'🔖'}
            onButtonClick={() => onMyBookingsButtonClick()}
          />
          <ButtonPrimary btnType="notifications" btnText="Notifications" emoji={'🔔'}></ButtonPrimary>
        </React.Fragment>
      )}
      <ButtonPrimary btnType="profile" btnText="Profile" emoji={'👤'}></ButtonPrimary>
      <HeaderProfileMenu />
    </div>
  );
}

interface IDescriptionMapState {
  auth: {
    gapiAuth: any;
    isSignedIn: boolean;
  };
}
const mapStateToProps = (state: IDescriptionMapState) => ({
  state,
});

export default connect(mapStateToProps, { toggleBookingListPopup, toggleOverlay })(HeaderNav);
