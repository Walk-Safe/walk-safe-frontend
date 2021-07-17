import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function TripView({ eta }) {

  // replace all instances of mockEta with eta once Router is connected
  const mockEta = 136;

  const [etaSeconds, setEtaSeconds] = useState('');

  useEffect(() => {
    setEtaSeconds(mockEta * 60);
  }, [mockEta]);

  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const getTimeSeconds = (time) => (minuteSeconds - time) || 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) || 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) || 0;

  const renderTime = (unit, time) => {
    return (
      <div className='timer-wrapper'>
        <div className='time-amt'>{Math.round(time)}</div>
        <div className='time-unit'>{unit}</div>
      </div>
    )
  }

  const timerProps = {
    isPlaying: true,
    size: 180,
    strokeWidth: 6,
  };

  if (!etaSeconds) {
    return <p>Loading...</p>;
  }

  return (
    <main className='trip-page'>
      <Header />
      <section className='trip-container'>
        <article className='timers-container'>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer hours-timer'}
            colors={[["#4687FA"]]}
            duration={daySeconds}
            initialRemainingTime={etaSeconds % daySeconds}
            onComplete={(totalElapsedTime) => [
              etaSeconds - totalElapsedTime > hourSeconds
            ]}
          >
            {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer minutes-timer'}
            colors={[["#FA4677"]]}
            duration={hourSeconds}
            initialRemainingTime={etaSeconds % hourSeconds}
            onComplete={(totalElapsedTime) => [
              etaSeconds - totalElapsedTime > minuteSeconds
            ]}
          >
            {({ elapsedTime }) => renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer seconds-timer'}
            colors={[
              ['#4687FA', 0.25],
              ['#9D46FA', 0.25],
              ['#FD3023', 0.25],
              ['#E3FD23', 0.25],
            ]}
            duration={minuteSeconds}
            initialRemainingTime={etaSeconds % minuteSeconds}
            onComplete={(totalElapsedTime) => [
              etaSeconds - totalElapsedTime > 0
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