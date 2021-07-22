import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import alertModalStyles from './jsxStyles/alertModalStyles';
import getAlertWidth from './jsxStyles/mediaQueries';

ReactModal.setAppElement('#root');

function Alert({ setEmergency, modalIsOpen, closeModal }) {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    getAlertWidth(width);
  }

  function handleModalClose() {
    setEmergency(false);
    closeModal();
  }

  const timerProps = {
    isPlaying: true,
    size: 30,
    strokeWidth: 3,
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      width={getAlertWidth(width)}
      style={alertModalStyles}
      contentLabel='alert modal'
      preventScroll={true}
    >
      <section className='alert-modal'>
        <div className='alert-nav'>
          <CountdownCircleTimer
            {...timerProps}
            className={'timer alert-timer'}
            colors={[['#000000', 1]]}
            duration={10}
            onComplete={handleModalClose}
          >
          </CountdownCircleTimer>
          <NavLink className='alert-exit-link' exact to='/'>
            <i type='button' onClick={handleModalClose} className="fas fa-times fa-2x alert-exit-btn"></i>
          </NavLink>
        </div>
        <h2 className='alert-title'>!ALERT!</h2>
        <p className='alert-message'>
          Your contact has been notified that your trip was not completed in time.
        </p>
      </section>
    </ReactModal>
  )
}

export default Alert;