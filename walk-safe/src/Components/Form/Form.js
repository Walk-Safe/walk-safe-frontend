import React from 'react';
import Select from 'react-select';

function Form({ openModal }) {
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
    </form>
  )
}

export default Form;