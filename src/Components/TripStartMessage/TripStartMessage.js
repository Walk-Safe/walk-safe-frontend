import React from 'react';

function TripStartMessage( {tripInfo, contactName, userNameInfo} ) {

 let textInformation = tripInfo.createTrip.trip

  const sendSms = (event) => {
    event.preventDefault();

    let smsObj = {
      mobile_number: `${contactName.phone}`,
      message: `${userNameInfo.firstName} has started a trip from ${textInformation.startPoint} to ${textInformation.endPoint}. ${userNameInfo.firstName} is traveling by ${textInformation.travelMode} with an ETA of ${textInformation.eta} minutes. Please be on the look out for a follow up message from ${userNameInfo.firstName}`,
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

export default TripStartMessage;
