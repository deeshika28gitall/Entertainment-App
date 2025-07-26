import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="sidebar">
      <div className="logo">🎬</div>
      <nav className="nav-links">
        <Link to="/" title="Home">🏠</Link>
        <Link to="/trending" title="Trending">🔥</Link>
        <Link to="/recommended" title="Recommended for you">🔖</Link>
      </nav>
      <div className="profile">👤</div>
    </div>
  );
};

export default Header;
