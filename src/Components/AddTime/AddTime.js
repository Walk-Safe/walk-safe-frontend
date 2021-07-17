import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ReactModal from 'react-modal';
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
          <span>Your ETA for this trip:</span>
        </p>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer seconds-timer'}
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
            {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
          </CountdownCircleTimer>
        <NavLink exact to='/trip'>
          <button onClick={closeModal} className='begin-trip-btn'>BEGIN TRIP</button>
        </NavLink>
        <NavLink exact to='/'>
          <button className='end-trip-btn'>
            END TRIP
          </button>
        </NavLink>
      </div>
    </ReactModal>
  )
}

export default AddTime;
