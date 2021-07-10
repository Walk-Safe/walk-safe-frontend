import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Select from 'react-select';

function Form() {
  return (
    <main className='main-page'>
      <NavBar />
      <Header />
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
        <button className='start-trip-btn'>
          START TRIP
        </button>
      </form>
    </main>
  )
}

export default Form;