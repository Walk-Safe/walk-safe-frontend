import React from 'react';
// import LoginView from '../LoginView/LoginView';
import MainView from '../MainView/MainView';
import TripView from '../TripView/TripView';
import TripEndMessage from "../TripEndMessage/TripEndMessage";

function App() {
  return (
    <div className="App">
      {/* <LoginView /> */}
       <MainView />
      <TripView />
      <TripEndMessage />
    </div>
  );
}

export default App;
