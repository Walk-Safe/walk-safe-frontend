import React from 'react';

function TripStartMessage( user, eta ) {
  // const [sms, setSms] = useState('');
  // const [contactNumber, setContactNumber] = useState('');

  const sendSms = (event) => {
    event.preventDefault();

    let smsObj = {
      mobile_number: '17083630654',
      message: 'This text indicates that we have one badass Back-End team!',
    }

    // let smsObjTripEnd = {
    //   mobile_number: '1' + contactNumber,
    //   message: sms,
    // }
    //
    // let smsObjTripNotComplete = {
    //   mobile_number: '1' + contactNumber,
    //   message: sms,
    // }

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

  export default TripStartMessage;
