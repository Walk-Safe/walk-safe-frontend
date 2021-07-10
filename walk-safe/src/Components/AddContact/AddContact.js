import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";

/* defining the mutation */
const ADD_CONTACT = gql`
 mutation addContact($first: String!, $last: String!, $phone: String!) {
   addContact(first_name: $first, last_name: $last, phone_number: $phone) {
     first_name
     last_name
     phone_number
   }
 }
`

function AddContact() {
  const [name, setFirst] = useState('')
  const [name, setLast] = useState('')
  const [phone, setPhone] = useState('')
  const [addContact] = useMutation()

  /* addContact is our mutate function that gets called when we are ready for the mutation to execute*/

  /* Refs in React give us a means of storing mutable values throughout a component's lifecycle, and are often used for interacting with the DOM without the need of re-rendering a component. In other words, we do not need to rely on state management to update an element with Refs. */

  return(
    <form className='contact-form' onSubmit={ e => {
      e.preventDefault();
      addContact({ variables: })
    }}>
      <h1>Add Contact</h1>
         <input
           title='first'
           value={first}
           onChange={(event) => setFirst(event.target.value)}
         />
         <input
           title='last'
           value={last}
           onChange={(event) => setLast(event.target.value)}
         />
         <input
           title='phone'
           value={phone}
           onChange={(event) => setPhone(event.target.value)}
         />
      <button type='submit'>Add Contact</button>
    </form>
  )
}

export default AddContact;
