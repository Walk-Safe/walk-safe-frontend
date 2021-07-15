import React from 'react';
import Header from '../Header/Header';

function TripView() {

  // add conditional rendering

  return (
    <main className='trip-page'>
      <Header />
      <section className='trip-container'>
        <article className='timer-container'>
          Timer for trip countdown
        </article>
        <button className='end-walk-btn'>
          END WALK
        </button>
      </section>
    </main>
  )
}

export default TripView;