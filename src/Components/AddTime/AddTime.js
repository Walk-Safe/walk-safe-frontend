import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ReactModal from 'react-modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { NavLink } from 'react-router-dom';
import extendedTimeOptions from '../../assets/extendedTimeOptions';

ReactModal.setAppElement('#root');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '50%',
    width: '55%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '27849b',
  },
};

const customDropdownStyles = {
  control: () => ({
    display: 'flex',
    minHeight: '30px',
    height: '55px',
  }),
  input: () => ({
    color: 'transparent',
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      alignSelf: 'center',
      justifySelf: 'center',
      fontSize: '1.5em',
      textJustify: 'center',
      marginLeft: '12%',
      letterSpacing: '3px',
      color: '#2b2f30'
    }
  },
};

function AddTime( { modalIsOpen, closeModal } ) {

  const [backupActive, setBackupActive] = useState(true);
  const [ emergency, setEmergency] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  function handleExpiration() {
    setBackupActive(false);
    setEmergency(true);
  }

  function handleExtension() {
    setBackupActive(false);
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
      style={customModalStyles}
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
              ['#26A7F9', 0.33],
              ['#24CE21', 0.33],
              ['#FF0000', 0.33],
            ]}
            duration={30}
            onComplete={handleExpiration}
          >
            {({ remainingTime }) => renderTime('seconds', remainingTime)}
          </CountdownCircleTimer>
          <section className='add-time-response'>
            <NavLink exact to='/'>
              {/* route to TripComplete page */}
              <button onClick={closeModal} className='end-trip-btn'>
                END TRIP
              </button>
            </NavLink>
            <Select
              className='extend-time'
              placeholder='EXTEND TIME'
              styles={customDropdownStyles}
              value={selectedTime}
              defaultValue={selectedTime}
              onChange={setSelectedTime}
              options={extendedTimeOptions}
            />
          </section>
      </div>
    </ReactModal>
  )
}

export default AddTime;
