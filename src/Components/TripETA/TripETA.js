import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
import TripStartMessage from '../TripStartMessage/TripStartMessage'
import etaModalStyles from './jsxStyles/etaModalStyles';

ReactModal.setAppElement('#root');

function TripETA( { modalIsOpen, closeModal, eta, setEta, tripDetails, contact, userName } ) {

  const [etaHrs, setEtaHrs] = useState(0);
  const [etaMins, setEtaMins] = useState(0);
  const [etaSecs, setEtaSecs] = useState(0);
  const [etaString, setEtaString] = useState('');

  useEffect(() => {
    if (eta) {
      reduceEta(eta.createTrip.trip.eta);
    }
  }, [eta]);

  useEffect(() => {
    buildEtaString();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [etaHrs, etaMins, etaSecs]);

  function reduceEta(etaNum) {
    if (etaNum > 60) {
      setEtaHrs((etaNum / 60) - etaNum % 60);
      setEtaMins(etaNum % 60);
    } else if (etaNum < 1) {
      setEtaSecs(etaNum * 60);
    } else {
      setEtaMins(etaNum);
    }
  }

  function buildEtaString() {
    if (etaHrs > 1) {
      setEtaString(`${etaHrs} hours and ${etaMins} minutes`);
    } else if (etaHrs === 1) {
      setEtaString(`${etaHrs} hour and ${etaMins} minutes`);
    } else if (etaSecs > 0 && etaMins < 1) {
      const seconds = etaMins * 60;
      setEtaString(`${seconds} seconds`);
    } else if (etaMins === 0 && etaSecs === 0) {
      setEtaString('30 seconds');
    } else {
      setEtaString(`${etaMins} minutes`);
    }
  }

  function taskWrapper(){
    closeModal();
    TripStartMessage(tripDetails, contact, userName);
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
              <span>Your estimated trip time:</span>
              <span>{etaString}</span>
            </p>
            <NavLink exact to='/trip'>
              <button onClick={taskWrapper} className='begin-trip-btn'>BEGIN TRIP</button>
            </NavLink>
          </>
          }
        </div>
      </ReactModal>
  )
}

export default TripETA;