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
    errors
  }
}
`

function Form({ contacts, handleEtaChange, userInfo, setContact }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valid, setValidCheck] = useState(false);
  const [query, setQuery] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [travelMode, setTravelMode] = useState('');
  const [createTrip, { loading: mutationLoading, error: mutationError, data }] = useMutation(CREATE_TRIP, { errorPolicy: 'none' });

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


  function formatContacts() {
    const formatted = contacts.map(contact => {
      const name = `${contact.firstName} ${contact.lastName}`
      const number= contact.phoneNumber;
      return { value: name, label: name, phone: number };
    })
    setFormattedContacts(formatted);
  }

  function setContactForApp(selectedContact) {
    setSelectedContact(selectedContact)
    setContact(selectedContact)
  }

  function sendTripData() {
    if (!startPoint || !endPoint || !selectedContact || !travelMode){
      console.log(mutationError)
      return setValidCheck(true);
    }
    setValidCheck(false);
    openModal();
    createTrip( {variables: {"startPoint": startPoint, "endPoint": endPoint, "travelMode": travelMode.value}}).catch(err => console.log(err));
    clearForm();
  }

  function clearForm() {
    setEndPoint('');
    setStartPoint('');
    setQuery('');
    setTravelMode('');
    setSelectedContact('');
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className='trip-form' onSubmit={handleSubmit} >
    {valid && <p>Complete form fields with Valid Data</p>}
    {mutationError && <pre>Bad: {mutationError.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
      </pre>}
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
        onChange={setContactForApp}
        options={formattedContacts}
      />
      <button onClick={sendTripData} className='submit-trip-btn'>
        SUBMIT TRIP
      </button>
      {modalIsOpen && <TripETA modalIsOpen={modalIsOpen} eta={data} setEta={handleEtaChange} tripDetails={data} contact={selectedContact} userName={userInfo} closeModal={closeModal}  />}
      {mutationLoading && <p className='loading'>Loading...</p>}
    </form>
  )
}


export default Form;
