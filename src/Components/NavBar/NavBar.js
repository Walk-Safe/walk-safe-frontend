import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from '../../theme';
import getDropdownWidth from './mediaQueries';

function NavBar({ nameToggle, user, switchTheme }) {

  const [displayName, setDisplayName] = useState(null);
  const [width, setWidth]   = useState(window.innerWidth);

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
   getDropdownWidth(width);
  }

  return (
    <nav className='navbar trip-nav'>
      {displayName && 
        <div className='welcome-container'>
          <h2 className='welcome-msg'>Welcome, {user}</h2>
        </div>
      }
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" />
          <CheckBoxLabel onClick={switchTheme} htmlFor="checkbox" />
        </CheckBoxWrapper>
        <Menu
          right
          width={getDropdownWidth(width)}
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
