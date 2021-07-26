import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import transportOptions from '../../assets/travelModeData';
import Autocomplete from 'react-google-autocomplete';
import { gql, useMutation, useQuery } from '@apollo/client';
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

const GET_USER = gql`
query GetUser {
  oneUser(id: 2) {
    contacts {
      firstName
      lastName
      phoneNumber
    }
  }
}
`

function Form({ contacts, handleEtaChange, userInfo, setContact, setTripIsActive }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valid, setValidCheck] = useState(false);
  // const [query, setQuery] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [formattedContacts, setFormattedContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [travelMode, setTravelMode] = useState('');
  const [createTrip, { loading: mutationLoading, error: mutationError, data: newTripData }] = useMutation(CREATE_TRIP, { errorPolicy: 'none' });
  const { loading: queryLoading, error: queryError, data: contactData } = useQuery(GET_USER);

  useEffect(() => {
    formatContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(newTripData)
    console.log('contact', contactData)
    if (newTripData) {
      handleEtaChange(newTripData.createTrip.trip.eta);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTripData]);

  const customStyles = {
    control: base => ({
      ...base,
      height: 45,
      minHeight: 35
    })
  };

  function formatContacts() {
    const formatted = contactData.oneUser.contacts.map(contact => {
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
    // clearForm();
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
    {mutationError || queryError && <pre>Bad: {mutationError.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
      </pre>}
      <Autocomplete
          onPlaceSelected={(place) => setStartPoint(place.formatted_address)}
          // onChange={event => setQuery(event.target.value)}
          options={{types: ['address']}}
          placeholder='Starting address'
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          className='location-input start-point'
          required
      />
      <Autocomplete
          onPlaceSelected={(place) => setEndPoint(place.formatted_address)}
          // onChange={event => setQuery(event.target.value)}
          options={{types: ['address']}}
          placeholder='Final address'
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          className='location-input end-point'
          required
      />
      <Select
        className='dropdown select-transport'
        placeholder='Select transportation type'
        value={travelMode}
        defaultValue={travelMode}
        onChange={setTravelMode}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        options={transportOptions}
        styles={customStyles}
      />
      <Select
        className='dropdown select-contact'
        placeholder='Select contact'
        value={selectedContact}
        defaultValue={selectedContact}
        onChange={setContactForApp}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        options={formattedContacts}
        styles={customStyles}
      />
      <button onClick={sendTripData} className='submit-trip-btn'>
        SUBMIT TRIP
      </button>
      {modalIsOpen &&
        <TripETA
          modalIsOpen={modalIsOpen}
          eta={newTripData}
          setEta={handleEtaChange}
          tripDetails={newTripData}
          contact={selectedContact}
          userName={userInfo}
          closeModal={closeModal}
          setTripIsActive={setTripIsActive}
        />
      }
      {mutationLoading || queryLoading && <p className='loading'>Loading...</p>}
    </form>
  )
}


export default Form;
