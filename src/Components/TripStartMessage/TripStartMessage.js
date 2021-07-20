import Popup from 'react-popup'

function TripStartMessage (tripDetails, contact, userName) {

  const textInformation = tripDetails.createTrip.trip

  const sendSms = () => {

    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${userName.firstName} has started a trip from ${textInformation.startPoint} to ${textInformation.endPoint}. ${userName.firstName} is traveling by ${textInformation.travelMode} with an ETA of ${textInformation.eta} minutes. Please be on the look out for a follow up message from ${userName.firstName}`,
    }

    fetch('https://walk-safe-backend.herokuapp.com/sms_messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accepts: "application/json"
      },
      body: JSON.stringify(smsObj)
    })
        .then(response => {
          if(response.status === 201) {
            Popup.alert(`Start trip notification successfully sent to ${contact.value}!`)
            return response.text();
        } else {
            Popup.alert(`Start trip notification to ${contact.value} was unsuccessful, please restart your trip and try again.`)
          }
  })
  }

return(
      sendSms()
  )
}

export default TripStartMessage;
