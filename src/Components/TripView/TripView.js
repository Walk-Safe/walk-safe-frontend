import React from 'react';
import Header from '../Header/Header';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function TripView({ eta }) {

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