import React from 'react';
import HeaderLogo from '@headerLogo/HeaderLogo';
import HeaderNav from '@headerNav/HeaderNav';
import './Header.css';
import { useEffect } from 'react';

function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
}

export default Header;
