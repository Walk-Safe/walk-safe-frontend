import React from 'react';

function TripEndMessage() {
  // const [sms, setSms] = useState('');
  // const [contactNumber, setContactNumber] = useState('');

  const sendSms = (event) => {
    event.preventDefault();

    let smsObj = {
      mobile_number: '17083630654',
      message: `{user.firstName + user.lastName} has confirmed their trip is completed.`,
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
        .then(resp => resp.json())
        .then(resp => console.log(resp))
  }
  //
  // const handleChange = (event) => {
  //   if (event.target.name === 'number') {
  //     setContactNumber(event.target.value);
  //   } else if (event.target.name === 'sms') {
  //     setSms(event.target.value);
  //   }
  // }

  return (

      <button onClick={sendSms}>Submit</button>

  );
}

export default TripEndMessage;