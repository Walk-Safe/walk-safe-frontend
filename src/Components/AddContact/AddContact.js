import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const CREATE_CONTACT = gql`
 mutation CreateContact($firstName: String!, $lastName: String!, $phoneNumber: String!){
   createContact(input: {firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, userId: 2}) {
     contact {
       id
       firstName
       lastName
       phoneNumber
     }
   }
 }
`

function AddContact() {
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [createContact, { loading: mutationLoading, error: mutationError, data }] = useMutation(CREATE_CONTACT)

  function addContact(e) {
    e.preventDefault();
    createContact( {variables: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber}});
    console.log(data);
  }

  return(
    <form className='contact-form'>
      <h1>Add Contact</h1>
         <input
           title='firstName'
           value={firstName}
           onChange={(event) => setFirst(event.target.value)}
         />
         <input
           title='lastName'
           value={lastName}
           onChange={(event) => setLast(event.target.value)}
         />
         <input
           title='phoneNumber'
           value={phoneNumber}
           onChange={(event) => setPhone(event.target.value)}
         />
      {mutationLoading && <p className='loading'>Loading...</p>}
      {mutationError && <p>Error: Please try again</p>}
      <button onClick={addContact}>Add Contact</button>
    </form>
  )
}

export default AddContact;
