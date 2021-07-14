import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import transportOptions from '../../assets/travelModeData';
import TripETA from '../TripETA/TripETA';
import SearchLocationInput from '../SearchLocationInput/SearchLocationInput';
// import TripDuration from '../TripDuration/TripDuration';

function Form({contacts}) {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(true);
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');

  useEffect(() => {
    formatContacts()
    console.log(process.env.REACT_APP_AUTOCOMPLETE_API_KEY)
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
    setEtaModalIsOpen(false);
  }

  function closeModal() {
    setEtaModalIsOpen(false);
  }

  return (
    <form className='trip-form'>
      <SearchLocationInput 
        className='location-input' 
        onChange={() => null}
      />
      <Select
        className='dropdown'
        placeholder='Select transportation type'
        defaultValue={selectedTransport}
        onChange={setSelectedTransport}
        options={transportOptions}
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
