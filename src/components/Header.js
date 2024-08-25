import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Blog Application</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/write">Write a Post</Link>
      </nav>
    </header>
  );
};

export default Header;
