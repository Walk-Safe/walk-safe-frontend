import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import AddTime from '../AddTime/AddTime';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { NavLink } from 'react-router-dom';

function CurrentTrip({ user, eta }) {

  const [etaSeconds, setEtaSeconds] = useState('');
  const [tripIsActive, setTripIsActive] = useState(true);
  const [tripEnded, setTripEnded] = useState(false);
  const [hoursActive, setHoursActive ] = useState(true)
  const [minutesActive, setMinutesActive ] = useState(true)
  const [secondsActive, setSecondsActive ] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const getTimeSeconds = (time) => (minuteSeconds - time) || 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) || 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) || 0;
  
  useEffect(() => {
    setEtaSeconds(eta * 60);
  }, [eta]);

  useEffect(() => {
    if (!hoursActive && !minutesActive && !secondsActive) {
      setTripIsActive(false);
    }
  }, [hoursActive, minutesActive, secondsActive]);

  useEffect(() => {
    if (!tripIsActive && tripEnded) {
      // trigger "Trip Complete" routing here
    }
  }, [tripEnded]);

  useEffect(() => {
    if (!tripIsActive && !tripEnded) {
      setModalIsOpen(true);
    }
  }, [tripIsActive]);

  function endTrip() {
    setTripEnded(true);
    setTripIsActive(false);
    setModalIsOpen(false);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const renderTime = (unit, time) => {
    return (
      <div className='timer-wrapper'>
        <div className='time-amt'>{Math.floor(time)}</div>
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
    return <p className='loading'>Loading...</p>;
  }

  return (
    <main className='trip-page'>
      <NavBar user={user.firstName}/>
      <Header />
      <section className='trip-container'>
        <article className='timers-container'>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer hours-timer'}
            colors={[["#4687FA"]]}
            duration={daySeconds}
            initialRemainingTime={etaSeconds % daySeconds}
            onComplete={(totalElapsedTime) => {
              setHoursActive(etaSeconds - totalElapsedTime > hourSeconds);
              return [etaSeconds - totalElapsedTime > hourSeconds]
            }}
          >
            {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer minutes-timer'}
            colors={[["#FF2727"]]}
            duration={hourSeconds}
            initialRemainingTime={etaSeconds % hourSeconds}
            onComplete={(totalElapsedTime) => {
              setMinutesActive(etaSeconds - totalElapsedTime > minuteSeconds);
              return [etaSeconds - totalElapsedTime > minuteSeconds]
            }}
          >
            {({ elapsedTime }) => renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer seconds-timer'}
            colors={[
              ['#FEBA17', 0.25],
              ['#E3FD23', 0.25],
              ['#34FF27', 0.25],
              ['#C780FC', 0.25],
            ]}
            duration={minuteSeconds}
            initialRemainingTime={etaSeconds % minuteSeconds}
            onComplete={(totalElapsedTime) => {
              setSecondsActive(etaSeconds - totalElapsedTime > 0);
              return [etaSeconds - totalElapsedTime > 0]
            }}
          >
            {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
          </CountdownCircleTimer>
        </article>
        <NavLink exact to='/'>
          <button onClick={endTrip} className='end-walk-btn'>
            END TRIP
          </button>
        </NavLink>
      </section>
      {!tripIsActive && <AddTime modalIsOpen={modalIsOpen} closeModal={closeModal} />}
    </main>
  )
}

export default CurrentTrip;