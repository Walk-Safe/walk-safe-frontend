import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Form from '../Form/Form';


function MainView ({ loading, error, currentUser, setCurrentContact, handleEtaChange, setTripIsActive, switchTheme }) {

  if (loading) return (
    <main className='main-page'>
      <p className='loading'>Loading...</p>
    </main>
  );

  if (error) return `Error! ${error.message}`;
    return (
      <main className='main-page'>
        {currentUser && <NavBar nameToggle='true' user={currentUser.firstName} switchTheme={switchTheme} />}
        <Header />
        {currentUser && <Form
          contacts={currentUser.contacts}
          userInfo={currentUser}
          handleEtaChange={handleEtaChange}
          setContact={setCurrentContact}
          setTripIsActive={setTripIsActive}
        />}
      </main>
    )
}


export default MainView;
