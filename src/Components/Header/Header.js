import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <div className="Header-title">
      <div className="Header-title-sup">
        <Link to="/">Haming Li</Link>
      </div>
      <div className="Header-title-sub">Design Studio</div>
    </div>

    <nav className="Header-nav">
      <Link className="Header-nav-item" to="/#products">
        Products
      </Link>
      <Link className="Header-nav-item" to="/#exhibitons">
        Exhibitons
      </Link>

      <Link className="Header-nav-item" to="/about">
        About
      </Link>
      <Link className="Header-nav-item" to="/about#contact">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
