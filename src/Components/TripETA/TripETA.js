import React from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
import etaModalStyles from './jsxStyles/etaModalStyles';

ReactModal.setAppElement('#root');

function TripETA( { modalIsOpen, closeModal, eta } ) {

  if (!eta) {
    return <></>;
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={etaModalStyles}
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
