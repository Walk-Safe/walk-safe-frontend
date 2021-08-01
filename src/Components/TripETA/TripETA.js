import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
import TripStartMessage from '../TripStartMessage/TripStartMessage'
import etaModalStyles from './jsxStyles/etaModalStyles';
import getEtaModalWidth from './jsxStyles/mediaQueries';

ReactModal.setAppElement('#root');

function TripETA( { modalIsOpen, closeModal, eta, tripDetails, contact, userName, setTripIsActive } ) {

  const [etaHrs, setEtaHrs] = useState(0);
  const [etaMins, setEtaMins] = useState(0);
  const [etaSecs, setEtaSecs] = useState(0);
  const [etaString, setEtaString] = useState('');
  const [loading, setLoading] = useState(true);
  const [width, setWidth]   = useState(window.innerWidth);

  useEffect(() => {
    if (eta) {
      reduceEta(eta.createTrip.trip.eta);
    }
  }, [eta]);

  useEffect(() => {
    buildEtaString();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [etaHrs, etaMins, etaSecs]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    getEtaModalWidth(width);
  }

  function reduceEta(etaNum) {
    if (etaNum > 60) {
      setEtaHrs(Math.floor(etaNum / 60));
      setEtaMins(etaNum % 60);
    } else if (etaNum > 0 && etaNum < 1) {
      setEtaSecs(etaNum * 60);
    } else if (etaNum >= 1 && etaNum < 60) {
      setEtaMins(etaNum);
    } else {
      setEtaMins(0.5);
    }
  }

  function buildEtaString() {
    if (etaHrs > 1) {
      setEtaString(`${etaHrs} hours and ${etaMins} minutes`);
    } else if (etaHrs === 1) {
      setEtaString(`1 hour and ${etaMins} minutes`);
    } else if (etaSecs > 0 && etaMins < 1) {
      const seconds = etaMins * 60;
      setEtaString(`${seconds} seconds`);
    } else if (etaMins >= 1 && etaMins < 60) {
      setEtaString(`${etaMins} minutes`);
    } else {
      setEtaString('30 seconds');
    }
    determineLoading();
  }

  function determineLoading() {
    if (etaHrs > 0 || etaMins > 0 || etaSecs > 0) {
      setLoading(false);
    }
  }

  function taskWrapper() {
    closeModal();
    setTripIsActive(true);
    TripStartMessage(tripDetails, contact, userName);
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={etaModalStyles}
      width={getEtaModalWidth(width)}
      contentLabel='trip ETA modal'
      preventScroll={true}
      shouldCloseOnOverlayClick={false}
    >
      {loading && 
        <div className='eta-modal'>
          <p className='loading'>Loading...</p>
        </div>
      }
      {!loading && 
        <div className='eta-modal'>
          <article className='modal-contents'>
            <span className='eta-text'>Your estimated trip time:</span>
            <span className='eta-num'>{etaString}</span>
            <NavLink exact to='/trip'>
              <button onClick={taskWrapper} className='begin-trip-btn'>BEGIN TRIP</button>
            </NavLink>
          </article>
        </div>
      }
    </ReactModal>
  )
}

export default TripETA;