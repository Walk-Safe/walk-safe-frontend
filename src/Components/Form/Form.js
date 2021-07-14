import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import transportOptions from '../../assets/travelModeData';
import TripETA from '../TripETA/TripETA';
// import TripDuration from '../TripDuration/TripDuration';

function Form({contacts}) {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(false);
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');

  useEffect(() => {
    formatContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formatContacts() {
    const formatted = contacts.map(contact => {
      const name = `${contact.firstName} ${contact.lastName}`;
  // once we're receiving dynamic contact IDs via variables, 
  // we'll want to assign 'contact.id' to the 'value' key below
      return { value: name, label: name };
    })
    setFormattedContacts(formatted);
  }

  function openModal() {
    setEtaModalIsOpen(true);
  }

  function closeModal() {
    setEtaModalIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className='trip-form' onSubmit={handleSubmit}>
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
        className='dropdown select-transport'
        placeholder='Select transportation type'
        defaultValue={selectedTransport}
        onChange={setSelectedTransport}
        options={transportOptions}
      />
      <Select
        className='dropdown select-contact'
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
