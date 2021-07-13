import React, { useState } from 'react';
import Select from 'react-select';
import TripETA from '../TripETA/TripETA';
// import TripDuration from '../TripDuration/TripDuration';

function Form({contacts}) {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState([]);

  function openModal() {
    setEtaModalIsOpen(true);
  }

  function closeModal() {
    setEtaModalIsOpen(false);
  }

  return (
    <form className='trip-form'>
      <input
        type='text'
        name='input'
        className='start-point'
        placeholder='Start Point'
      />
      <input
        type='text'
        name='input'
        className='end-point'
        placeholder='End Point'
      />
      <input
        type='text'
        name='input'
        className='transport-type'
        placeholder='Mode of Transportation'
      />
      <input
        type='text'
        name='input'
        className='eta'
        placeholder='ETA'
      />
      <Select
        className='dropdown'
        placeholder='Select contact'
        defaultValue={selectedContact}
        onChange={setSelectedContact}
        options={contacts}
      />
      <button onClick={openModal} className='submit-trip-btn'>
        SUBMIT TRIP
      </button>
      <TripETA modalIsOpen={etaModalIsOpen} closeModal={closeModal} />
      {/* <TripDuration /> */}
    </form>
  )
}

export default Form;
