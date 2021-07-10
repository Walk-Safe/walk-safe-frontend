import React, { useState } from 'react';
import { useMutation } from "@apollo/react-hooks";



function AddContact() {

  const [addContact] = useMutation()

  /* addContact is our mutate function that gets called when we are ready for the mutation to execute*/

  /* Refs in React give us a means of storing mutable values throughout a component's lifecycle, and are often used for interacting with the DOM without the need of re-rendering a component. In other words, we do not need to rely on state management to update an element with Refs. */

  /*




  */

  return(
    <form className='contact-form' onSubmit={ e => {
      e.preventDefault();
      addContact({ variables: })
    }}>
      <h1>Add Contact</h1>
      <input
        title='first'
        value={first}
      />
      <input
        title='last'
        value={last}
      />
      <input
        title='phone'
        value={phone}
      />
      <button type='submit'>Add Contact</button>
    </form>
  )
}

export default AddContact;
