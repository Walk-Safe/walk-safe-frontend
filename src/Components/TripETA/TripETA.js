import React from 'react';
import ReactModal from 'react-modal';
import TripStartMessage from '../sendSms/send_sms'

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

function handleSubmit(e) {
  e.preventDefault();
}

function TripETA( { modalIsOpen, closeModal } ) {

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="trip ETA modal"
      preventScroll={true}
    >
      <div className='eta-modal' onSubmit={handleSubmit}>
        <p className='eta-message'>
          <span>Your ETA for this trip is</span>
          <span>X hour and Y minutes.</span>
        </p>
        <button onClick={TripStartMessage}
                className='begin-trip-btn'>BEGIN TRIP</button>
      </div>
    </ReactModal>
  )
}

export default TripETA;