import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
import etaModalStyles from './jsxStyles/etaModalStyles';

ReactModal.setAppElement('#root');

function TripETA( { modalIsOpen, closeModal, eta } ) {

  const [etaHrs, setEtaHrs] = useState(0);
  const [etaMins, setEtaMins] = useState(0);
  const [etaString, setEtaString] = useState('');

  useEffect(() => {
    if (eta) {
      reduceEta(eta.createTrip.trip.eta);
    }
  }, [eta]);

  useEffect(() => {
    if (etaMins) {
      buildEtaString();
    }
  }, [etaMins]);

  function reduceEta(etaNum) {
    if (etaNum > 60) {
      setEtaHrs((etaNum / 60) - etaNum % 60);
      setEtaMins(etaNum % 60);
    } else {
      setEtaMins(etaNum);
    }
  }

  function buildEtaString() {
    if (etaHrs > 1) {
      setEtaString(`${etaHrs} hours and ${etaMins} minutes`);
    } else if (etaHrs === 1) {
      setEtaString(`${etaHrs} hour and ${etaMins} minutes`);
    } else {
      setEtaString(`${etaMins} minutes`);
    }
  }

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
        {!etaString && <p className='loading'>Loading...</p>}
        {etaString && 
          <>
            <p className='eta-message'>
              <span>Your ETA for this trip:</span>
              <span>{etaString}</span>
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
