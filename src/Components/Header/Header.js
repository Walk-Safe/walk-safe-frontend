import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='app-header'>
      <NavLink exact to='/' className=''>
        <h1>
          WALK SAFE
        </h1>
      </NavLink>
    </header>
  )
}

export default Header;