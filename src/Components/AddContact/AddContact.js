import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import { gql, useMutation, useQuery } from '@apollo/client';
import {toast} from "react-toastify";

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

const GET_USER = gql`
query GetUser {
  oneUser(id: 2) {
    firstName
    lastName
    username
    contacts {
      firstName
      lastName
      phoneNumber
    }
  }
}
`

function AddContact({ user, switchTheme }) {
  const [valid, setValidCheck] = useState(false);
  const [verify, setPhoneVerify] = useState(false);
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [countryCode, setCountry] = useState('');
  const [areaCode, setArea] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const { loading: queryLoading, error: queryError, data } = useQuery(GET_USER);
  const [createContact, { loading: mutationLoading, error: mutationError }] = useMutation(CREATE_CONTACT);
  const addedContactAlert = () => toast.success(`${firstName} ${lastName} contact information has been added`);

  function addContact(e) {
    e.preventDefault();

    if (!firstName || !lastName || !countryCode || !areaCode || !phoneNumber) {
      return setValidCheck(true);
    }

    // if (checkPhoneNum()) {
    //   return
    // }

    setValidCheck(false);
    setPhoneVerify(false);
    let number = `+${countryCode}${areaCode}${phoneNumber}`;
    createContact({
      variables: { firstName: firstName, lastName: lastName, phoneNumber: number},
      refetchQueries: [{ query: GET_USER }]
    });
    clearForm();
    addedContactAlert()
  }

  function checkPhoneNum() {
    if (countryCode.length === 0) {
      setPhoneVerify(true);
      return true;
    } else if (areaCode.length !== 3) {
      setPhoneVerify(true);
      return true;
    } else if (phoneNumber.length !== 7) {
      setPhoneVerify(true);
      return true;
    } else {
      setPhoneVerify(false);
      return false;
    }
  }

  function clearForm() {
    setFirst('');
    setLast('');
    setCountry('');
    setArea('');
    setPhone('');
  }

  // function modifyNumberInput(event) {
  //   setPhone(toString(event.target.value));
  // }

  return (
    <main className='add-contact-page'>
      <NavBar nameToggle='true' user={user.firstName} switchTheme={switchTheme} />
      <Header />
      <section className='contact-container'>
        <div className='add-contact-title'>
          <h2>Add Contact</h2>
        </div>
        <form className='contact-form'>
          <div className='form-error'>
            {valid && <p>Complete Fields With Valid Data</p>}
            {verify && <p className='form-error'>Enter valid phone number</p>}
          </div>
          <div className='contact-form-label'>
            <h3>Name</h3>
          </div>
          <div className='contact-name'>
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
          </div>
          <div className='contact-form-label'>
            <h3>Phone Number</h3>
          </div>
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
          <button className='add-contact-btn' onClick={addContact}>SUBMIT</button>
        </form>
      </section>
    </main>
  )
}

export default AddContact;
