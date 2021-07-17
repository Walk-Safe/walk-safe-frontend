import React, { Component, useState } from 'react';
// import LoginView from '../LoginView/LoginView';
// import MainView from '../MainView/MainView';
import TripView from '../TripView/TripView';

function App() {

  const [eta, setETA] = useState('');
  const [ currentUser, setCurrentUser] = useState('');

  const handleEtaChange = (time) => {
    setETA(time);
  }

  return (
    <div className='App'>
      {/* <LoginView /> */}
      {/* <MainView
        handleEtaChange={handleEtaChange}
        setCurrentUser={setCurrentUser}
      /> */}
      <TripView 
        eta={eta}
        user={currentUser}
      />
    </div>
  );
}

export default App;
