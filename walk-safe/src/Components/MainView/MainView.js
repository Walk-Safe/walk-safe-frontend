import React, { useState }  from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Form from '../Form/Form';
import MapDisplay from '../MapDisplay/MapDisplay';
import TripETA from '../TripETA/TripETA';
// import TripDuration from '../TripDuration/TripDuration';

function MainView() {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(false);

  function openModal() {
    setEtaModalIsOpen(true);
  }

  return (
    <main className='main-page'>
      <NavBar />
      <Header />
      <Form openModal={openModal} />
      <MapDisplay />
      <TripETA modalIsOpen={etaModalIsOpen} />
      {/* <TripDuration /> */}
    </main>
  )
}

export default MainView;