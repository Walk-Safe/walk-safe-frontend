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
      <section className='main-column'>
        <Form />
        <MapDisplay />
      </section>
    </main>
  )
}

export default MainView;