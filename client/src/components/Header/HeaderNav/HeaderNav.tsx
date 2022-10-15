import HeaderNavButton from '@headerNavButton/HeaderNavButton';
import HeaderProfileMenu from '@headerProfileMenu/HeaderProfileMenu';
import './HeaderNav.css';

function HeaderNav() {
  return (
    <div className="header__nav">
      <HeaderNavButton btnType="bookings" btnText="My Bookings"></HeaderNavButton>
      <HeaderNavButton btnType="notifications" btnText="Notifications"></HeaderNavButton>
      <HeaderNavButton btnType="profile" btnText="Profile"></HeaderNavButton>
      <HeaderProfileMenu></HeaderProfileMenu>
    </div>
  );
}

export default HeaderNav;
