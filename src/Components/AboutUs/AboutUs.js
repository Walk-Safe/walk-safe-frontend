import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import devNames from '../../assets/devNames';

function AboutUs({ user }) {

  let [ feDevCards, setFEDevCards ] = useState([]);
  let [ beDevCards, setBEDevCards ] = useState([]);

  function buildDevCard(dev) {
    return (
      <article key={dev.id} className='dev-card'>
        <div className='pic-container grow'>
          <a className='pic-link' href={`https://github.com/${dev.ghName}`}>
            <img className='dev-pic' src={`https://avatars.githubusercontent.com/u/${dev.id}?v=4`} alt={dev.fullName}/>
          </a>
        </div>
        <a className='name-link' href={`https://github.com/${dev.ghName}?tab=repositories`} target='_top'>
          <h1 className='dev-name'>{dev.fullName}</h1>
        </a>
      </article>
    )
  }

  useEffect(() => {
    if (devNames) {
      populateCards();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function populateCards() {
    const feCards = devNames.map(dev => {
      if (devNames.indexOf(dev) < 3) {
        return buildDevCard(dev);
      } else {
        return undefined;
      }
    });
    const beCards = devNames.map(dev => {
      if (devNames.indexOf(dev) > 2) {
        return buildDevCard(dev);
      } else {
        return undefined;
      }
    });
    setFEDevCards(feCards);
    setBEDevCards(beCards);
  }

  if (beDevCards.length === 0) return <p className='loading'>Loading...</p>;

  return (
    <main className='about-us-page'>
      <NavBar nameToggle={false} user={user.firstName}/>
      <Header />
      <div className='bio-container'>
        <p className='bio-text'>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <section className='team-grid'>
        <h3 className='row-title'>Front End</h3>
        <div className='card-row'>
          {feDevCards}
        </div>
        <h3 className='row-title'>Back End</h3>
        <div className='card-row'>
          {beDevCards}
        </div>
      </section>
    </main>
  )
}

export default AboutUs;