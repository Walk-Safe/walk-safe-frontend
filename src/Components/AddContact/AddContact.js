import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
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
  const [valid, setValidCheck] = useState(false)
  const [verify, setPhoneVerify] = useState(false)
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [countryCode, setCountry] = useState('')
  const [areaCode, setArea] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [createContact, { loading: mutationLoading, error: mutationError, data }] = useMutation(CREATE_CONTACT)

  function addContact(e) {
    e.preventDefault();
    if(!firstName || !lastName || !countryCode || !areaCode || !phoneNumber){
      return setValidCheck(true);
    }
    if(checkPhoneNum()){
      return
    }
    setValidCheck(false);
    setPhoneVerify(false);
    let number = `+${countryCode}${areaCode}${phoneNumber}`;
    createContact( {variables: { firstName: firstName, lastName: lastName, phoneNumber: number}});
    clearForm();
  }

  function checkPhoneNum() {
    if(countryCode.length === 0){
      setPhoneVerify(true)
      return true
    } else if(areaCode.length !== 3){
      setPhoneVerify(true)
      return true
    } else if(phoneNumber.length !== 7){
      setPhoneVerify(true)
      return true
    } else {
      setPhoneVerify(false)
      return false
    }
  }

  function clearForm() {
    setFirst('');
    setLast('');
    setCountry('');
    setArea('');
    setPhone('');
  }

  function modifyNumberInput(event) {
    setPhone(toString(event.target.value));
  }

  return(
    <section className='add-contact'>
      <NavBar user={user.firstName}/>
      <Header />
      <form className='contact-form'>
        {valid && <p className='form-error'>Complete Fields With Valid Data</p>}
        {verify && <p className='form-error'>Enter valid phone number</p>}
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
        <button onClick={addContact}>ADD CONTACT</button>
      </form>
    </section>
  )
}

export default AddContact;
