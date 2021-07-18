import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginView from '../LoginView/LoginView';
import MainView from '../MainView/MainView';
<<<<<<< HEAD
import TripView from '../TripView/TripView';
import AddContact from '../AddContact/AddContact';
=======
import CurrentTrip from '../CurrentTrip/CurrentTrip';
>>>>>>> e96f9f58aa8f1bcbfa85e84ffe722ef573b86a58

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
<<<<<<< HEAD
          <TripView
=======
          <CurrentTrip 
>>>>>>> e96f9f58aa8f1bcbfa85e84ffe722ef573b86a58
            eta={eta}
            user={currentUser}
          />
        </Route>
        <Route exact path='/addcontact'>
          <AddContact
          user={currentUser}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;