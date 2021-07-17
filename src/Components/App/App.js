import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginView from '../LoginView/LoginView';
import MainView from '../MainView/MainView';
import TripView from '../TripView/TripView';
import AddContact from '../AddContact/AddContact';

function App() {

  const [eta, setETA] = useState('');
  const [ currentUser, setCurrentUser] = useState('');

  const handleEtaChange = (time) => {
    setETA(time);
  }

  return (
    <Router>
      <div className='App'>
        <Route exact path='/login'>
          <LoginView />
        </Route>
        <Route exact path='/'>
          <MainView
            handleEtaChange={handleEtaChange}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path='/trip'>
          <TripView
            eta={eta}
            user={currentUser}
          />
        </Route>
        <Route exact path='/addcontact'>
          <AddContact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
