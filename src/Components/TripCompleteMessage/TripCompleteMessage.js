import React from 'react';

function TripEndMessage( contact, userName) {

  const sendSms = (event) => {
    event.preventDefault();

    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${userName.firstName} has confirmed their trip is completed. Thank you!`,
    }

    fetch('https://walk-safe-backend.herokuapp.com/sms_messages', {
      method:'POST',
      headers: {
        'content-type': 'application/json',
        accepts: "application/json"
      },
      body: JSON.stringify(smsObj)
    })
        .then(result => result.text())
        .then(resp => console.log(resp))
  }

  return (
      <button onClick={sendSms}>Submit</button>
  );
}

export default TripEndMessage;