import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          WALK SAFE
        </h1>
      </header>
      <main className='login-container'>
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
          <button>
            LOGIN
          </button>
          <button>
            CONTINUE AS GUEST
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
