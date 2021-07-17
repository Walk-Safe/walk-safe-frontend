import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ReactModal from 'react-modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { NavLink } from 'react-router-dom';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '40%',
    width: '45%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'ghostwhite',
    overlayClassName: 'eta-modal-overlay'
  },
};

function AddTime( { modalIsOpen, closeModal } ) {

  const [backupActive, setBackupActive] = useState(true);
  const [ emergency, setEmergency] = useState(false);

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
      style={customStyles}
      contentLabel='trip ETA modal'
      preventScroll={true}
    >
      <div className='add-time-modal'>
        <p className='timeout-message'>
          You've surpassed your ETA, do you need more time?
        </p>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer backup-timer'}
            colors={[
              ['#FEBA17', 0.25],
              ['#E3FD23', 0.25],
              ['#34FF27', 0.25],
              ['#C780FC', 0.25],
            ]}
            duration={60}
            // initialRemainingTime={60}
            onComplete={handleExpiration}
          >
            {({ elapsedTime }) => renderTime('seconds', elapsedTime)}
          </CountdownCircleTimer>
        <NavLink exact to='/'>
          {/* route to TripComplete page */}
          <button onClick={closeModal} className='end-trip-btn'>
            END TRIP
          </button>
        </NavLink>
        <NavLink exact to='/trip'>
          {/* route to TimeExtend page */}
          <button onClick={closeModal} className='extend-time-btn'>EXTEND TIME</button>
        </NavLink>
      </div>
    </ReactModal>
  )
}

export default AddTime;
