import React, { useEffect } from 'react';
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

function MainView({ setCurrentUser, handleEtaChange }) {
 const { loading, error, data } = useQuery(GET_USER);

 useEffect(() => {
   if (data) {
     setCurrentUser(data.oneUser);
   }
 }, [data]);

 if (loading) return <p className='loading'>Loading...</p>;
 if (error) return `Error! ${error.message}`;

  return (
    <main className='main-page'>
      <NavBar user={data.oneUser.firstName}/>
      <Header />
      <Form 
        contacts={data.oneUser.contacts}
        handleEtaChange={handleEtaChange}
      />
    </main>
  )
}

export default MainView;
