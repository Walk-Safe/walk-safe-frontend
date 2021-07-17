import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import transportOptions from '../../assets/travelModeData';
import Autocomplete from 'react-google-autocomplete';
import { gql, useMutation } from '@apollo/client';
import TripETA from '../TripETA/TripETA';

const CREATE_TRIP = gql `
  mutation CreateTrip($startPoint: String!, $endPoint: String!, $travelMode: String!){
    createTrip(input: {startPoint: $startPoint, endPoint: $endPoint, travelMode: $travelMode, userId: 2}) {
    trip {
      userId
      startPoint
      endPoint
      eta
      travelMode
    }
  }
}
`

function Form({ contacts, handleEtaChange }) {

  const [etaModalIsOpen, setEtaModalIsOpen] = useState(false);
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [travelMode, setTravelMode] = useState('');
  const [query, setQuery] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [createTrip, { loading: mutationLoading, error: mutationError, data }] = useMutation(CREATE_TRIP);

  useEffect(() => {
    formatContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      handleEtaChange(data.createTrip.trip.eta);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log(data)

  function formatContacts() {
    const formatted = contacts.map(contact => {
      const name = `${contact.firstName} ${contact.lastName}`;
      return { value: name, label: name };
    })
    setFormattedContacts(formatted);
  }

  function sendTripData() {
    console.log(endPoint);
    console.log(startPoint);
    openModal();
    createTrip( {variables: {"startPoint": startPoint, "endPoint": endPoint, "travelMode": travelMode.value}});
    formatTripInformation(createTrip)
  }

  function formatTripInformation (tripInfo) {
   console.log(tripInfo)
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
          onPlaceSelected={(place) => setStartPoint(place.formatted_address)}
          onChange={event => setQuery(event.target.value)}
          options={{types: ['address']}}
          placeholder='Starting address'
          className='location-input start-point'
          required
      />
      <Autocomplete
          onPlaceSelected={(place) => setEndPoint(place.formatted_address)}
          onChange={event => setQuery(event.target.value)}
          options={{types: ['address']}}
          placeholder='Final address'
          className='location-input end-point'
          required
      />
      <Select
        className='dropdown select-transport'
        placeholder='Select transportation type'
        value={travelMode}
        defaultValue={travelMode}
        onChange={setTravelMode}
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
      <button onClick={sendTripData} className='submit-trip-btn'>
        SUBMIT TRIP
      </button>
      {etaModalIsOpen && <TripETA modalIsOpen={etaModalIsOpen} eta={data} tripInfo={data} contact={selectedContact} closeModal={closeModal} />}
      {mutationLoading && <p className='loading'>Loading...</p>}
      {mutationError && <p>Error: Please try again</p>}
    </form>
  )
}


export default Form;
