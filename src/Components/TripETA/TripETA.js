import React from 'react';
import ReactModal from 'react-modal';

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

function TripETA( { modalIsOpen, closeModal, eta } ) {

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="trip ETA modal"
      preventScroll={true}
    >
      <div className='eta-modal'>
        <p className='eta-message'>
          <span>Your ETA for this trip is</span>
          {eta && <span>{eta.createTrip.trip.eta}</span>}
        </p>
        <button className='begin-trip-btn'>BEGIN TRIP</button>
      </div>
    </ReactModal>
  )
}

export default TripETA;
