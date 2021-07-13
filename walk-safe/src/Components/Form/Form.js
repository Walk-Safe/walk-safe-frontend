import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TripETA from '../TripETA/TripETA';
// import TripDuration from '../TripDuration/TripDuration';

function Form({contacts}) {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(false);
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState([]);

  useEffect(() => {
    formatContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formatContacts() {
    const formatted = contacts.map(contact => {
      return `${contact.firstName} ${contact.lastName}`;
    })
    setFormattedContacts(formatted);
  }

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
      <Select
        className='dropdown'
        placeholder='Select transportation type'
        // defaultValue={selectedTransport}
        // onChange={setSelectedTransport}
        // options={transportation}
      />
      <Select
        className='dropdown'
        placeholder='Select contact'
        value={selectedContact}
        defaultValue={selectedContact}
        onChange={setSelectedContact}
        options={formattedContacts}
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
