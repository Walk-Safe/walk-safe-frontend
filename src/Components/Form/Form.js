import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import transportOptions from '../../assets/travelModeData';
import TripETA from '../TripETA/TripETA';
import Autocomplete from "react-google-autocomplete";

// import {SearchLocationInput} from '../SearchLocationInput/SearchLocationInput.js'
// import {SearchLocationInput2} from '../SearchLocationInput2/SearchLocationInput2.js'
// import TripDuration from '../TripDuration/TripDuration';

function Form({contacts}) {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(false);
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const [query, setQuery] = useState("");

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
    setEtaModalIsOpen(true);
  }

  function closeModal() {
    setEtaModalIsOpen(false);
  }

  return (
    <form className='trip-form'>
      <Autocomplete
          onChange={event => setQuery(event.target.value)}
          placeholder="Starting address"
          className='location-input'
          required
      />;
      <Autocomplete
          onPlaceSelected={(place,) => {
            console.log(place);
          }}
          placeholder="Ending address"
          className='location-input'
          required
      />;
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
