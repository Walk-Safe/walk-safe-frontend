import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

function NavBar({ nameToggle, user }) {

  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    if (nameToggle) {
      setDisplayName(nameToggle);
    }
  }, []);

  return (
    <nav className='navbar'>
      {displayName && 
        <div className='welcome-container'>
          <h2 className='welcome-msg'>Welcome, {user}</h2>
        </div>
      }
        <Menu
          right
          width={'20%'}
          className='hamburger-menu'
        >
          <NavLink exact to='/' className='menu-item'>
            <span>Plan Trip</span>
          </NavLink>
          <NavLink exact to='/addcontact' className='menu-item'>
            <span>Add Contact</span>
          </NavLink>
          <NavLink exact to='/about' className='menu-item'>
            <span>About Us</span>
          </NavLink>
        </Menu>
    </nav>

  )
}


export default NavBar;
