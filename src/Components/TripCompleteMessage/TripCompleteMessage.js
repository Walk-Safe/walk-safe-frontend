import Popup from 'react-popup';

export function TripCompleteMessage(contact, user) {

  const sendSms = () => {
    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${user.firstName} has confirmed that their trip was completed in time. Thank you!`,
    }

    fetch('https://walk-safe-backend.herokuapp.com/sms_messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(smsObj)
    })
      .then(response => {
        if (response.status === 201) {
          Popup.alert(`'Trip completed' notification successfully sent to \n${contact.value}. \nThank you for using Walk Safe!`)
          return response.text();
        } else {
          Popup.alert(`'Trip completed' notification was unsuccessful, \nplease contact ${contact.value} directly.`)
        }
      })
  }

  return (
    sendSms()
  )
}

export default TripCompleteMessage;