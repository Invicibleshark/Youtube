import React from 'react'

const Navbar = () => {
    return (
      <div className='navbar'>
        <nav className='navbar-container'>
          <div className='navbar-logo'>
            YouTube Toolkit
          </div>
          <ul className='navbar-menu'>
            <li className='navbar-item'>
              <a href='#features' className='navbar-link'>Features</a>
            </li>
            <li className='navbar-item'>
              <a href='#contact' className='navbar-link'>Contact</a>
            </li>
            <li className='navbar-item'>
              <a href='#login' className='navbar-link navbar-link-login'>Login</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

export default  Navbar;