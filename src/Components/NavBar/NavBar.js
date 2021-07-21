import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import DropdownWidthMediaQuery from './mediaQueries';

function NavBar({ nameToggle, user }) {

  const [displayName, setDisplayName] = useState(null);
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (nameToggle) {
      setDisplayName(nameToggle);
    }
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    DropdownWidthMediaQuery(width);
  }

  return (
    <nav className='navbar'>
      {displayName && 
        <div className='welcome-container'>
          <h2 className='welcome-msg'>Welcome, {user}</h2>
        </div>
      }
        <Menu
          right
          width={DropdownWidthMediaQuery(width)}
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
