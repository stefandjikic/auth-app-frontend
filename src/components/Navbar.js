import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a href='/' className='navbar-brand'>
          Auth App
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link to="/" className="nav-link">Login</Link></li>
          <li className="nav-item"><Link to="/signup" className="nav-link">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
