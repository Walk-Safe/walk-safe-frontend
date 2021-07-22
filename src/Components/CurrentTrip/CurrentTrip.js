import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import AddTime from '../AddTime/AddTime';
import Alert from '../Alert/Alert';
import TripCompleteMessage from '../TripCompleteMessage/TripCompleteMessage';
import TripExtendedMessage from "../TripExtendedMessage/TripExtendedMessage";
import TripNotCompleteMessage from "../TripNotCompleteMessage/TripNotComplete";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { NavLink, Redirect } from 'react-router-dom';
import getMainTimerSize from './mediaQueries';

function CurrentTrip({ user, eta, contact, tripIsActive, setTripIsActive }) {

  const [etaSeconds, setEtaSeconds] = useState(null);
  const [extension, setExtension] = useState({});
  const [tripEnded, setTripEnded] = useState(false);
  const [emergency, setEmergency] = useState(false);
  const [hoursActive, setHoursActive ] = useState(true)
  const [minutesActive, setMinutesActive ] = useState(true);
  const [secondsActive, setSecondsActive ] = useState(true);
  const [extensionModalIsOpen, setExtensionModalIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertModalIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const getTimeSeconds = (time) => (minuteSeconds - time) || 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) || 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) || 0;

  useEffect(() => {
    if (eta > 0 && !extension.value) {
      beginTrip();
      setEtaSeconds(eta * 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eta]);

  useEffect(() => {
    if (extension.value > 0) {
      setEtaSeconds(extension.value);
      beginTrip();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extension, tripIsActive]);

  useEffect(() => {
    if (!hoursActive && !minutesActive && !secondsActive) {
      setTripIsActive(false);
      setExtension(0);
      setEtaSeconds(null);
    };
  }, [hoursActive, minutesActive, secondsActive]);

  useEffect(() => {
    if (!tripIsActive && !tripEnded && !emergency) {
      setExtensionModalIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tripIsActive]);

  useEffect(() => {
    if (extension.value > 0) {
      setEtaSeconds(extension.value);
      TripExtendedMessage(user, extension, contact)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extension])

  useEffect(() => {
    if (emergency) {
      setAlertModalIsOpen(true);
      setExtensionModalIsOpen(false);
      setEtaSeconds(null);
      setExtension(0);
      setTripEnded(true);
      TripNotCompleteMessage(user, contact)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emergency]);
  
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    getMainTimerSize(width);
  }

  function beginTrip() {
    setTripIsActive(true);
    setTripEnded(false);
    setEmergency(false);
    setHoursActive(true);
    setMinutesActive(true);
    setSecondsActive(true);
    setExtensionModalIsOpen(false);
    setAlertModalIsOpen(false);
  }

  function endTrip() {
    setTripEnded(true);
    setTripIsActive(false);
    setExtensionModalIsOpen(false);
    TripCompleteMessage(contact, user)
  }

  function closeExtensionModal() {
    setExtensionModalIsOpen(false);
  }

  function closeAlertModal() {
    setAlertModalIsOpen(false);
  }

  const renderTime = (unit, time) => {
    return (
      <div className='timer-wrapper'>
        <div className='time-amt'>{Math.floor(time)}</div>
        <div className='time-unit'>{unit}</div>
      </div>
    )
  }

  if (!emergency && tripEnded) {
    return <Redirect to='/'/>;
  }

  if (!emergency && !tripIsActive && !tripEnded && extension.value === 0) {
    return <p className='loading'>Loading...</p>;
  }

  return (
    <main className='trip-page'>
      <NavBar nameToggle='true' user={user.firstName}/>
      <Header />
      <section className='trip-container'>
        {!etaSeconds && <p className='loading'>Loading...</p>}
        {etaSeconds && 
          <article className='timers-container'>
            <CountdownCircleTimer
              isPlaying={true}
              strokeWidth={6}
              className={'timer hours-timer'}
              size={getMainTimerSize(width)}
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
              isPlaying={true}
              strokeWidth={6}
              className={'timer minutes-timer'}
              size={getMainTimerSize(width)}
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
              isPlaying={true}
              strokeWidth={6}
              className={'timer seconds-timer'}
              size={getMainTimerSize(width)}
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
        }
        <NavLink exact to='/'>
          <button onClick={endTrip} className='end-trip-btn'>
            END TRIP
          </button>
        </NavLink>
      </section>
      {extensionModalIsOpen &&
        <AddTime
          setTripIsActive={setTripIsActive}
          setExtension={setExtension}
          setEtaSeconds={setEtaSeconds}
          modalIsOpen={extensionModalIsOpen}
          closeModal={closeExtensionModal}
          setEmergency={setEmergency}
          contactInfo={contact}
          userInfo={user}
        />
      }
      {emergency &&
        <Alert
          setEmergency={setEmergency}
          modalIsOpen={alertModalIsOpen}
          closeModal={closeAlertModal} 
        />
      }
    </main>
  )
}

export default CurrentTrip;