import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

function AboutUs({ data }) {

  return (
    <main className='about-us-page'>
      {data && <NavBar user={data.oneUser.firstName}/>}
      <Header />
      <div className='bio-container'>
        <p className='bio-text'>
          BIO TEXT
        </p>
        <section className='team-grid'>
          <article className='dev-card'>
            TEAM MEMBER #1
          </article>
        </section>
      </div>
    </main>
  )
}

export default AboutUs;