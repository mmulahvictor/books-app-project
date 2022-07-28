import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

function Navbar () {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;