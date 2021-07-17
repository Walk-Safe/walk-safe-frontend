import React from 'react';
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
  },
};

function TripETA( { modalIsOpen, closeModal, eta } ) {

  if (!eta) {
    return <></>;
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='trip ETA modal'
      preventScroll={true}
    >
      <div className='eta-modal'>
        {!eta && <p className='loading'>Loading...</p>}
        {eta && 
          <>
            <p className='eta-message'>
              <span>Your ETA for this trip:</span>
              <span>{eta.createTrip.trip.eta} minutes</span>
            </p>
            <NavLink exact to='/trip'>
              <button onClick={closeModal} className='begin-trip-btn'>BEGIN TRIP</button>
            </NavLink>
          </>
        }
      </div>
    </ReactModal>
  )
}

export default TripETA;
