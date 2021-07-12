import React from 'react';
import { slide as Menu } from 'react-burger-menu'

function NavBar({user}) {
  return (
    <nav className='navbar'>
      <div className='welcome-container'>
        <h2 className='welcome-msg'>Welcome, {user}</h2>
      </div>
        <Menu 
          right
          width={'25%'}
        >
          <a id="home" className="menu-item" href="/">Add New Contact</a>
          <a id="about" className="menu-item" href="/about">Plan New Trip</a>
          <a id="contact" className="menu-item" href="/contact">About Us</a>
        </Menu>
    </nav>

  )
}


export default NavBar;
