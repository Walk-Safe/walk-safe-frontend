import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TripETA from '../TripETA/TripETA';
// import TripDuration from '../TripDuration/TripDuration';

function Form() {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(true);

  // useEffect(() => {
  //   setEtaModalIsOpen(false);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [setEtaModalIsOpen]);

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
        // defaultValue={selectedContact}
        // onChange={setSelectedContact}
        // options={contacts}
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