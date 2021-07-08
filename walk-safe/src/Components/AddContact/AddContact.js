import React, { useState } from 'react';
import './AddContact.scss';


function AddContact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return(
    <form>
      <div className='form-container'>
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
      <button onClick={postContact}>Add Contact</button>
    </form>
  )
}

export default AddContact;
