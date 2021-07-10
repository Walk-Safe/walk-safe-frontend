import React from 'react';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='welcome-container'>
        <h2 className='welcome-msg'>Welcome, user's name!</h2>
      </div>
      <div className='hamburger-container'>
        <i className='fas fa-bars fa-2x' style={{width: '100%', height: '100%'}}></i>
      </div>
    </nav>

  )
}

      
export default NavBar;
      