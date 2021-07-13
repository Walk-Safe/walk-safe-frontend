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
          width={'20%'}
        >
          <a id="contact" className="menu-item" href="/">Add Contact</a>
          <a id="trip" className="menu-item" href="/">Plan New Trip</a>
          <a id="about" className="menu-item" href="/">About Us</a>
        </Menu>
    </nav>

  )
}


export default NavBar;
