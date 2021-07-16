import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function TripView({ eta }) {

  const [ hours, setHours ] = useState('');
  const [ minutes, setMinutes ] = useState('');
  const [ seconds, setSeconds ] = useState('');

  useEffect(() => {
    reduceMinutes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reduceMinutes = () => {
    console.log(eta);
  }

  // add conditional rendering

  // REFERENCE
  // npm package: https://www.npmjs.com/package/react-countdown-circle-timer
  // Days, hours, minutes, seconds countdown: https://codesandbox.io/s/musing-davinci-mqssz?fontsize=14&hidenavigation=1&theme=dark

  return (
    <main className='trip-page'>
      <Header />
      <section className='trip-container'>
        <article className='timer-container'>
          <CountdownCircleTimer
            isPlaying
            className={'hours-timer'}
            duration={10}
            colors={[
              ['#004777', 0.33],
              ['#F7B801', 0.33],
              ['#A30000', 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            isPlaying
            className={'minutes-timer'}
            duration={10}
            colors={[
              ['#004777', 0.33],
              ['#F7B801', 0.33],
              ['#A30000', 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            isPlaying
            className={'seconds-timer'}
            duration={10}
            colors={[
              ['#004777', 0.33],
              ['#F7B801', 0.33],
              ['#A30000', 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </article>
        <button className='end-walk-btn'>
          END WALK
        </button>
      </section>
    </main>
  )
}

export default TripView;