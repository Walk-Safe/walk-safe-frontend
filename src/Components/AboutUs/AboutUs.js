import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import devNames from '../../assets/devNames';

function AboutUs({ user }) {

  let [ feDevCards, setFEDevCards ] = useState([]);
  let [ beDevCards, setBEDevCards ] = useState([]);

  function buildDevCard(dev) {
    return (
      <article className='dev-card'>
        <div class="github-card user-card">
          <div class="header User"></div>
          <a class="avatar" href={`https://github.com/${dev.ghName}`} target="_top">
            <img src={`https://avatars.githubusercontent.com/u/${dev.id}?v=4&amp;s=80`} alt={dev.fullName}/>
          </a>
          <div class="content">
            <a href={`https://github.com/${dev.ghName}?tab=repositories`} target="_top">
              <h1>{dev.fullName}</h1>
            </a>
          </div>
        </div>
      </article>
    )
  }

  useEffect(() => {
    // if (devNames) {
      populateCards();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function populateCards() {
    const feCards = devNames.map(dev => {
      if (devNames.indexOf(dev) < 3) {
        return buildDevCard(dev);
      }
    });
    const beCards = devNames.map(dev => {
      if (devNames.indexOf(dev) > 2)
      return buildDevCard(dev);
    });
    setFEDevCards(feCards);
    setBEDevCards(beCards);
  }

  if (beDevCards.length === 0) return <p className='loading'>Loading...</p>;

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
          <h3>Front End</h3>
          {feDevCards}
          <h3>Back End</h3>
          {beDevCards}
        </section>
    </main>
  )
}

export default AboutUs;