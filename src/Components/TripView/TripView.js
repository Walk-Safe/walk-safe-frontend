import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function TripView({ eta }) {

  const [ hours, setHours ] = useState('');
  const [ minutes, setMinutes ] = useState('');
  const [ seconds, setSeconds ] = useState('');

  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + 243248; // use UNIX timestamp in seconds
  const remainingTime = endTime - startTime;

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;

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
      <div className='timer-wrapper'>
        <div className='time-amt'>{time}</div>
        <div className='time-unit'>{unit}</div>
      </div>
    )
  }

  const timerProps = {
    isPlaying: true,
    size: 180,
    strokeWidth: 6,
  };

  // npm package: https://www.npmjs.com/package/react-countdown-circle-timer
  // Days, hours, minutes, seconds countdown: https://codesandbox.io/s/musing-davinci-mqssz?fontsize=14&hidenavigation=1&theme=dark

  return (
    <main className='trip-page'>
      <Header />
      <section className='trip-container'>
        <article className='timers-container'>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer hours-timer'}
            colors={[["#18F315"]]}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > hourSeconds
            ]}
          >
            {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer minutes-timer'}
            colors={[["#FA4677"]]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > minuteSeconds
            ]}
          >
            {({ elapsedTime }) => renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer seconds-timer'}
            colors={[
              ['#4687FA', 0.20],
              ['#9D46FA', 0.20],
              ['#FD3023', 0.20],
              ['#E3FD23', 0.20],
              ['#0CF3FE', 0.20],
            ]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > 0
            ]}
          >
            {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
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