import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
import alertModalStyles from './jsxStyles/alertModalStyles';

ReactModal.setAppElement('#root');

function AlertMessage({ modalIsOpen, closeModal }) {

  function handleExitBtnClick() {
    closeModal();
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={alertModalStyles}
      contentLabel='alert modal'
      preventScroll={true}
    >
      <div className='alert-modal'>
        <NavLink className='alert-exit-link' exact to='/'>
          <i type='button' onClick={handleExitBtnClick} className="fas fa-times fa-2x alert-exit-btn"></i>
        </NavLink>
        <h2 className='alert-title'>!ALERT!</h2>
        <p className='alert-message'>
          Your contact has been notified that your trip was not completed in time.
        </p>
      </div>
    </ReactModal>
  )
}

export default AlertMessage;