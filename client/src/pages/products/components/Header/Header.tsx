import React from 'react';
import HeaderLogo from '@headerLogo/HeaderLogo';
import HeaderNav from '@headerNav/HeaderNav';
import './Header.css';

export interface HeaderConfig {
  buttonType: string;
  onProfileButtonClick: (btnType: string) => void;
}

function Header(props: HeaderConfig) {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav buttonType={props.buttonType} onProfileButtonClick={props.onProfileButtonClick} />
    </header>
  );
}

export default Header;
