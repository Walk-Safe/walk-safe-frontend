import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import transportOptions from '../../assets/travelModeData';
import TripETA from '../TripETA/TripETA';
import Autocomplete from 'react-google-autocomplete';

// import {SearchLocationInput} from '../SearchLocationInput/SearchLocationInput.js'
// import {SearchLocationInput2} from '../SearchLocationInput2/SearchLocationInput2.js'
// import TripDuration from '../TripDuration/TripDuration';
const CREATE_TRIP = gpl `
  mutation createTrip(input: {startPoint: $startPoint, endPoint: $endPoint, travelMode: $selectedTransport, userId: 2}) {
    trip {
      userId
      startPoint
      endPoint
      eta
      travelMode
    }
    errors
  }
`

function Form({contacts}) {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(false);
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const [query, setQuery] = useState('');

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
      <Autocomplete
          onPlaceSelected={(place,) => {
            console.log(place);
          }}
          onChange={event => setQuery(event.target.value)}
          options={{types: ["address"]}}
          placeholder='Starting address'
          className='location-input start-point'
          required
      />
      <Autocomplete
          onPlaceSelected={(place,) => {
            console.log(place);
          }}
          onChange={event => setQuery(event.target.value)}
          options={{types: ["address"]}}
          placeholder='Final address'
          className='location-input end-point'
          required
      />
      <Select
        className='dropdown select-transport'
        placeholder='Select transportation type'
        value={selectedTransport}
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
