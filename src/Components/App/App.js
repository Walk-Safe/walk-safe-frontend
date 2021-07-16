import React, { Component, useState } from 'react';
// import LoginView from '../LoginView/LoginView';
import MainView from '../MainView/MainView';
// import TripView from '../TripView/TripView';

function App() {

  const [eta, setETA] = useState('');

  const handleEtaChange = (time) => {
    setETA(time);
  }

  // render() {
    return (
      <div className="App">
        {/* <LoginView /> */}
        <MainView 
          handleEtaChange={handleEtaChange}
        />
        {/* <TripView 
          eta={eta}
        /> */}
      </div>
    );
  // }
}

export default App;
