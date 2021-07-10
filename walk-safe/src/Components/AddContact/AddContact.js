import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";

/* defining the mutation */
const ADD_CONTACT = gql`
 mutation addContact($first: String!, $last: String!, $phone: String!, $id: Integer!) {
   addContact(first_name: $first, last_name: $last, phone_number: $phone, user_id: $id) {
     first_name
     last_name
     phone_number
     user_id
   }
 }
`

function AddContact({id}) {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [phone, setPhone] = useState('')
  const [addContact] = useMutation(ADD_CONTACT, { variables: { first, last, phone, id }})

  /* addContact is our mutate function that gets called when we are ready for the mutation to execute*/

  /* Refs in React give us a means of storing mutable values throughout a component's lifecycle, and are often used for interacting with the DOM without the need of re-rendering a component. In other words, we do not need to rely on state management to update an element with Refs. (used when you are not using useState) */

  return(
    <form className='contact-form'>
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
      <button onClick={addContact}>Add Contact</button>
    </form>
  )
}

export default AddContact;
