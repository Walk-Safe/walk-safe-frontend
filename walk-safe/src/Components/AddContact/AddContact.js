import React, { useState } from 'react';



function AddContact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  /*postContact method here for GraphQL data*/

  return(
    <form className='contact-form'>
      <div className='contact-input-container'>
        <h1>Add Contact</h1>
        <input
          title='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          title='phone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <button>Add Contact</button>
    </form>
  )
}

export default AddContact;
