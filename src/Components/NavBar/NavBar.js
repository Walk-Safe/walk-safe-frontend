import React from 'react';
import { NavLink } from 'react-router-dom';
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
          className='hamburger-menu'
        >
          <NavLink exact to='/' className='menu-item'>
            <span>Add Contact</span>
          </NavLink>
          <NavLink exact to='/' className='menu-item'>
            <span>Plan New Trip</span>
          </NavLink>
          <NavLink exact to='/' className='menu-item'>
            <span>About Us</span>
          </NavLink>
        </Menu>
    </nav>

  )
}


export default NavBar;
