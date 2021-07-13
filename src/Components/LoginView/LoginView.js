import React from 'react';
import Header from '../Header/Header';

function LoginView() {
  return (
    <main className='login-container'>
      <Header />
      <form className='login-form'>
        <input
          username='username'
          className='username'
          type='text'
          placeholder='enter username'
          name='input'
        />
        <input
          password='password'
          className='password'
          type='text'
          placeholder='enter password'
          name='input'
        />
        <button className='login-btn'>
          LOGIN
        </button>
        <button className='guest-btn'>
          CONTINUE AS GUEST
        </button>
      </form>
    </main>
  )
}

export default LoginView;