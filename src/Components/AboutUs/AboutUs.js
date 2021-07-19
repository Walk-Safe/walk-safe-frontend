import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

function AboutUs({ user }) {

  return (
    <main className='about-us-page'>
      {user && <NavBar user={user.firstName}/>}
      <Header />
      <div className='bio-container'>
        <p className='bio-text'>
          BIO TEXT
        </p>
      </div>
        <section className='team-grid'>
          <article className='dev-card'>
            TEAM MEMBER #1
          </article>
        </section>
    </main>
  )
}

export default AboutUs;