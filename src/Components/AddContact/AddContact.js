import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
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

function AddContact({ user }) {
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [countryCode, setCountry] = useState('')
  const [areaCode, setArea] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [createContact, { loading: mutationLoading, error: mutationError, data }] = useMutation(CREATE_CONTACT)

  function addContact(e) {
    e.preventDefault();
    let number = `+${countryCode}${areaCode}${phoneNumber}`;
    createContact( {variables: { firstName: firstName, lastName: lastName, phoneNumber: number}});
  }

  function modifyNumberInput(event) {
    setPhone(toString(event.target.value));
  }

<<<<<<< HEAD
  return(
    <section className='add-contact'>
      <NavBar user={user.firstName}/>
      <Header />
      <form className='contact-form'>
        <h2>Add Contact</h2>
           <input
             title='firstName'
             placeholder='First Name'
             value={firstName}
             onChange={(event) => setFirst(event.target.value)}
           />
           <input
             title='lastName'
             placeholder='Last Name'
             value={lastName}
             onChange={(event) => setLast(event.target.value)}
           />
           <h3>Phone Number</h3>
           <div className='phone-number'>
             <input
               title='countryCode'
               placeholder='Country Code'
               value={countryCode}
               onChange={(event) => setCountry(event.target.value)}
             />
             <input
               title='areaCode'
               placeholder='Area Code'
               value={areaCode}
               onChange={(event) => setArea(event.target.value)}
             />
             <input
               title='phoneNumber'
               placeholder='Phone Number'
               value={phoneNumber}
               onChange={(event) => setPhone(event.target.value)}
             />
           </div>
        {mutationLoading && <p className='loading'>Loading...</p>}
        {mutationError && <p>Error: Please try again</p>}
        <button onClick={addContact}>Add Contact</button>
      </form>
    </section>
=======
  return (
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
>>>>>>> e96f9f58aa8f1bcbfa85e84ffe722ef573b86a58
  )
}

export default AddContact;
