import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <div className="Header-title">
      <div className="Header-title-sup">
        <Link to="/home">Haming Li</Link>
      </div>
      <div className="Header-title-sub">Design Studio</div>
    </div>

    <nav className="Header-nav">
      <Link smooth className="Header-nav-item" to="/home#products">
        Products
      </Link>
      <Link smooth className="Header-nav-item" to="/home#exhibitions">
        Exhibitons
      </Link>

      <Link className="Header-nav-item" to="/about">
        About
      </Link>
      <Link smooth className="Header-nav-item" to="/about#contact">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
