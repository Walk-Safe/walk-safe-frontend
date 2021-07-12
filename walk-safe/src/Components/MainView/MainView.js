import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Form from '../Form/Form';
import MapDisplay from '../MapDisplay/MapDisplay';
import TripETA from '../TripETA/TripETA';

function MainView() {
  return (
    <main className='main-page'>
      <NavBar />
      <Header />
      <Form />
      <MapDisplay />
      {/* <TripETA /> */}
    </main>
  )
}

export default MainView;