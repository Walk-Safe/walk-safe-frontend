import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ReactModal from 'react-modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { NavLink } from 'react-router-dom';
import extendedTimeOptions from '../../assets/extendedTimeOptions';
import addTimeModalStyles from './jsxStyles/addTimeModalStyles';
import addTimeDropdownStyles from './jsxStyles/dropdownStyles';
import TripCompleteMessage from '../TripCompleteMessage/TripCompleteMessage';
import { getAddTimeModalWidth, getExtendedTimerWidth } from './jsxStyles/mediaQueries';

ReactModal.setAppElement('#root');

function AddTime( { setExtension, setEmergency, setEtaSeconds, modalIsOpen, closeModal, endTripMessage, contactInfo, userInfo } ) {

  const [selectedTime, setSelectedTime] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    getAddTimeModalWidth(width);
    getExtendedTimerWidth(width);
  }

  function handleExpiration() {
    setEmergency(true);
  }

  function handleExtension(selection) {
    setSelectedTime(selection.value);
    setExtension(selection);
    setEtaSeconds(null);
    closeModal();
  }

  function handleEndTrip() {
    TripCompleteMessage(contactInfo,userInfo);
    closeModal();
  }

  const renderTime = (unit, time) => {
    return (
      <div className='backup-timer'>
        <div className='time-amt'>{Math.floor(time)}</div>
        <div className='time-unit'>{unit}</div>
      </div>
    )
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{content: {...addTimeModalStyles, width: getAddTimeModalWidth(width) }}}
      contentLabel='add time modal'
      preventScroll={true}
      shouldCloseOnOverlayClick={false}
    >
      <div className='add-time-modal'>
        <article className='add-time-contents'>
          <p className='timeout-message'>
            You've surpassed your ETA, <br></br>do you need more time?
          </p>
            <CountdownCircleTimer
              isPlaying={true}
              strokeWidth={6}
              size={getExtendedTimerWidth(width)}
              className={'timer backup-timer'}
              colors={[
                ['#24CE21', 0.33],
                ['#26A7F9', 0.33],
                ['#FF0000', 0.33],
              ]}
              duration={500}
              onComplete={handleExpiration}
            >
              {({ remainingTime }) => renderTime('seconds', remainingTime)}
            </CountdownCircleTimer>
          <p className='warning-message'>
            Your contact will be notified if you do not select an option in the remaining time.
          </p>
          <section className='add-time-response'>
            <NavLink exact to='/'>
              <button onClick={handleEndTrip} className='end-trip-modal-btn'>
                END TRIP
              </button>
            </NavLink>
            <Select
              className='extend-time'
              placeholder='EXTEND TIME'
              styles={addTimeDropdownStyles}
              value={selectedTime}
              defaultValue={selectedTime}
              onChange={selectedTime => {
                handleExtension(selectedTime)
              }}
              options={extendedTimeOptions}
            />
          </section>
        </article>
      </div>
    </ReactModal>
  )
}

export default AddTime;
