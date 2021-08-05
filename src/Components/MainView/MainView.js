import React, { useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { gql, useQuery } from '@apollo/client';

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

function MainView ({ currentUser, setCurrentUser, setCurrentContact, handleEtaChange, setTripIsActive, switchTheme }) {

  const { loading, error, data } = useQuery(GET_USER);

  useEffect(() => {
    if (data) {
      setCurrentUser(data.oneUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (loading) return (
    <main className='main-page'>
      <p className='loading'>Loading...</p>
    </main>
  );

  if (error) return (
    <main className='main-page'>
      <p className='loading'>`Error! ${error.message}`</p>
    </main>
  );

  return (
    <main className='main-page'>
      {currentUser && <NavBar nameToggle='true' user={currentUser.firstName} switchTheme={switchTheme} />}
      <Header />
      {currentUser && <Form
        contacts={currentUser.contacts}
        userInfo={currentUser}
        handleEtaChange={handleEtaChange}
        setContact={setCurrentContact}
        setTripIsActive={setTripIsActive}
      />}
    </main>
  )
}


export default MainView;
