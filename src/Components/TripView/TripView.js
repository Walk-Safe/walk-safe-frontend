import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function TripView({ eta }) {

  const [ hours, setHours ] = useState('');
  const [ minutes, setMinutes ] = useState('');
  const [ seconds, setSeconds ] = useState('');
  const mockETA = 136;

  useEffect(() => {
    reduceTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reduceTime = () => {
    if (mockETA > 60) {
      setHours(Math.floor(mockETA / 60 ));
      setMinutes(mockETA % 60);
    }
  }

  const renderTime = (unit, time) => {
    return (
      <div className='time-wrapper'>
        <div className='time-amt'>{time}</div>
        <div>{unit}</div>
      </div>
    );
};

  // npm package: https://www.npmjs.com/package/react-countdown-circle-timer
  // Days, hours, minutes, seconds countdown: https://codesandbox.io/s/musing-davinci-mqssz?fontsize=14&hidenavigation=1&theme=dark

  return (
    <main className='trip-page'>
      <Header />
      <section className='trip-container'>
        <article className='timer-container'>
          <CountdownCircleTimer
            className={'hours-timer'}
            colors={[["#D14081"]]}
          >
            {({ remainingTime }) => renderTime('hours', hours)}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            className={'minutes-timer'}
            colors={[["#EF798A"]]}
          >
            {({ remainingTime }) => renderTime('minutes', minutes)}
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
            {({ remainingTime }) => renderTime('seconds', seconds)}
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