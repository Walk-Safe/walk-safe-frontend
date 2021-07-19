import React, { useState } from 'react';
import Select from 'react-select';
import ReactModal from 'react-modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { NavLink } from 'react-router-dom';
import extendedTimeOptions from '../../assets/extendedTimeOptions';
import addTimeModalStyles from './jsxStyles/addTimeModalStyles';
import addTimeDropdownStyles from './jsxStyles/dropdownStyles';
import TripCompleteMessage from "../TripCompleteMessage/TripCompleteMessage";
ReactModal.setAppElement('#root');

function AddTime( { setExtension, setEmergency, setEtaSeconds, modalIsOpen, closeModal, endTripMessage, contactInfo, userInfo } ) {

  const [selectedTime, setSelectedTime] = useState('');

  function handleExpiration() {
    setEmergency(true);
  }

  function handleExtension(timeAmt) {
    setSelectedTime(timeAmt);
    setExtension(timeAmt);
    setEtaSeconds(null);
    closeModal();
  }

  function handleEndTrip() {
    TripCompleteMessage(contactInfo,userInfo)
    closeModal()
  }

  const timerProps = {
    isPlaying: true,
    size: 180,
    strokeWidth: 6,
  };

  const renderTime = (unit, time) => {
    return (
      <div className='timer-wrapper'>
        <div className='time-amt'>{Math.floor(time)}</div>
        <div className='time-unit'>{unit}</div>
      </div>
    )
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={addTimeModalStyles}
      contentLabel='add time modal'
      preventScroll={true}
    >
      <div className='add-time-modal'>
        <p className='timeout-message'>
          You've surpassed your ETA, <br></br>do you need more time?
        </p>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer backup-timer'}
            colors={[
              ['#24CE21', 0.33],
              ['#26A7F9', 0.33],
              ['#FF0000', 0.33],
            ]}
            duration={30}
            onComplete={handleExpiration}
          >
            {({ remainingTime }) => renderTime('seconds', remainingTime)}
          </CountdownCircleTimer>
        <p className='warning-message'>
          Your contact will be notified if you do not select an option in the remaining time.
        </p>
        <section className='add-time-response'>
          <NavLink exact to='/'>
            <button onClick={handleEndTrip} className='end-trip-btn'>
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
              handleExtension(selectedTime.value)
            }}
            options={extendedTimeOptions}
          />
        </section>
      </div>
    </ReactModal>
  )
}

export default AddTime;
