import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import devNames from '../../assets/devNames';

function AboutUs({ user, switchTheme }) {

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
      <NavBar nameToggle='false' switchTheme={switchTheme} />
      <Header />
      <h2 className='about-us-title'>About Us</h2>
      <div className='bio-container'>
        <p className='bio-text'>{`There's a sense of security one feels as you are walking with friends, family, and even colleagues. The reality of our daily lives doesn't always allow for this luxury, nor does the innate desire for independence. Walk Safe was born from the simple idea of keeping your community close when your journey takes you far.`}</p>
        <p className='bio-text'>{`The concept may be something you've already engrained in a part of your daily routine: texting a loved one that youve made it home safe. What if, for whatever reason, you weren't able to send that reassuring text?`}</p>
        <p className='bio-text'>{`That's where the team at Walk Safe has your back. Not only will our technology inform your community of trips, we will keep them updated from start to finish. Every successfully completed trip results in that reassuring text to your loved one. If something goes wrong, our algorithm will take care of alerting your community first. Our custom, curated messages utilizing user geolocation data provides the necessary toolkit to empower individuals to take that solo journey, whatever the distance may be.`}</p>
      </div>
      <section className='team-grid'>
        <h2 className='row-title'>Front End</h2>
        <div className='card-row'>
          {feDevCards}
        </div>
        <h2 className='row-title'>Back End</h2>
        <div className='card-row'>
          {beDevCards}
        </div>
      </section>
    </main>
  )
}

export default AboutUs;
