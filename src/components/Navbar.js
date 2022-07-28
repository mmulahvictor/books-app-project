import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

function Navbar () {
  return (
    <nav className='nav'>
      <Link to="/" className='link'>Home</Link>
      <Link to="/About" className='link'>About</Link>
      <Link to="/Contact" className='link'>Contact</Link>
    </nav>
  );
}

export default Navbar;