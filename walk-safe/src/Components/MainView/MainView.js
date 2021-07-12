import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Form from '../Form/Form';
import MapDisplay from '../MapDisplay/MapDisplay';

function MainView() {

  return (
    <main className='main-page'>
      <NavBar />
      <Header />
      <Form />
      <MapDisplay />
    </main>
  )
}

export default MainView;