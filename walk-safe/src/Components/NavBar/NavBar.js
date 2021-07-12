import React from 'react';
import { slide as Menu } from 'react-burger-menu'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='welcome-container'>
        <h2 className='welcome-msg'>Welcome, user's name!</h2>
      </div>
      <div className='hamburger-container'>
        <Menu right>
          <a id="home" className="menu-item" href="/">Add Contact</a>
          <a id="about" className="menu-item" href="/about">Plan Trip</a>
          <a id="contact" className="menu-item" href="/contact">About</a>
        </Menu>
      </div>
    </nav>

  )
}

      
export default NavBar;
      
