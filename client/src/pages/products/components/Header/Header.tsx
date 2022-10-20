import React from 'react';
import HeaderLogo from '@headerLogo/HeaderLogo';
import HeaderNav from '@headerNav/HeaderNav';
import './Header.css';

function Header(props: { onProfileButtonClick: (btnType: string) => void }) {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav onProfileButtonClick={props.onProfileButtonClick} />
    </header>
  );
}

export default Header;
