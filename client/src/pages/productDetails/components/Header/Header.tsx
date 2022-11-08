import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="product-detail-header">
      <div>
        <h2 className="heading-default heading-primary--bold">Transalvania</h2>
        <h2 className="heading-default heading-secondary">
          <span className="heading-secondary--1">153B ,VIA DEL CORSO</span>
          <span className="heading-secondary--2">Italy Venice</span>
        </h2>
        <h2 className="heading-default heading-price">400$ per night</h2>
      </div>
    </header>
  );
}

export default Header;
