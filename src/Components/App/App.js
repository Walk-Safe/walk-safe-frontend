import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from '../../theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginView from '../LoginView/LoginView';
import MainView from '../MainView/MainView';
import AddContact from '../AddContact/AddContact';
import CurrentTrip from '../CurrentTrip/CurrentTrip';
import AboutUs from '../AboutUs/AboutUs';

const GET_USER = gql`
query GetUser {
  oneUser(id: 2) {
    firstName
    lastName
    username
    contacts {
      firstName
      lastName
      phoneNumber
    }
  }
}
`

function App() {

  const [tripIsActive, setTripIsActive] = useState(false);
  const [eta, setETA] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [theme, setTheme] = useState("light");

  const { loading, error, data } = useQuery(GET_USER);

  useEffect(() => {
    if (data) {
      setCurrentUser(data.oneUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleEtaChange = (time) => {
    if (time > 0) {
      setETA(time);
    } else {
      setETA(0.5);
    }
  }

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className='App'>
          <ToastContainer
            className='toast-container'
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Route exact path='/login'>
            <LoginView />
          </Route>
          <Route exact path='/'>
            <MainView
              loading={loading}
              error={error}
              switchTheme={switchTheme}
              setTripIsActive={setTripIsActive}
              handleEtaChange={handleEtaChange}
              currentUser={currentUser}
              setCurrentContact={setCurrentContact}
            />
          </Route>
          <Route exact path='/trip'>
            <CurrentTrip
              switchTheme={switchTheme}
              tripIsActive={tripIsActive}
              setTripIsActive={setTripIsActive}
              eta={eta}
              user={currentUser}
              contact={currentContact}
            />
          </Route>
          <Route exact path='/addcontact'>
            <AddContact
              switchTheme={switchTheme}
              user={currentUser}
            />
          </Route>
          <Route exact path='/about'>
            <AboutUs
              switchTheme={switchTheme}
              user={currentUser}
            />
          </Route>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
