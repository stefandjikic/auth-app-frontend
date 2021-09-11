import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Auth App
        </Link>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
