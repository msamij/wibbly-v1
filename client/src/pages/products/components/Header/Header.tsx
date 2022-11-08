import React from 'react';
import HeaderLogo from '@headerLogo/HeaderLogo';
import HeaderNav from '@headerNav/HeaderNav';
import './Header.css';

export interface IHeaderProps {
  buttonType: string;
  onProfileButtonClick: (btnType: string) => void;
}

function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav buttonType={props.buttonType} onProfileButtonClick={props.onProfileButtonClick} />
    </header>
  );
}

export default Header;
