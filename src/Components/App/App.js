import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginView from '../LoginView/LoginView';
import MainView from '../MainView/MainView';
import AddContact from '../AddContact/AddContact';
import CurrentTrip from '../CurrentTrip/CurrentTrip';
import AboutUs from '../AboutUs/AboutUs';
import Popup from "react-popup";


function App() {

  const [eta, setETA] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [currentContact, setCurrentContact] = useState('');

  const handleEtaChange = (time) => {
    if (time > 0) {
      setETA(time);
    } else {
      setETA(0.5);
    }
  }

  return (
    <Router>
      <Popup />
      <div className='App'>
        <Route exact path='/login'>
          <LoginView />
        </Route>
        <Route exact path='/'>
          <MainView
            handleEtaChange={handleEtaChange}
            setCurrentUser={setCurrentUser}
            setCurrentContact={setCurrentContact}
          />
        </Route>
        <Route exact path='/trip'>
          <CurrentTrip
            eta={eta}
            user={currentUser}
            contact={currentContact}
          />
        </Route>
        <Route exact path='/addcontact'>
          <AddContact
            user={currentUser}
          />
        </Route>
        <Route exact path='/about'>
          <AboutUs
            user={currentUser}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
