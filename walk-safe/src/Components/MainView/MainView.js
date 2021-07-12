import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Form from '../Form/Form';
import MapDisplay from '../MapDisplay/MapDisplay';
import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
query GetUser {
  oneUser(id: 1) {
    firstName
    lastName
    username
    contacts {
      firstName
      phoneNumber
    }
  }
}
`

function MainView() {
 const { loading, error, data } = useQuery(GET_USER);

 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;
 if (data) return `${console.log(data)}`;

  return (
    <main className='main-page'>
      <NavBar />
      <Header />
      <Form />
      <MapDisplay />
    </main>
  )
}

export default MainView;
