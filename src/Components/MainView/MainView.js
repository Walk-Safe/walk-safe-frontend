import React from 'react';
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

function MainView() {
 const { loading, error, data } = useQuery(GET_USER);

 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

  return (
    <main className='main-page'>
      <NavBar user={data.oneUser.firstName}/>
      <Header />
      <Form contacts={data.oneUser.contacts}/>
    </main>
  )
}

export default MainView;
