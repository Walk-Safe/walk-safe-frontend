import Popup from "react-popup";

export function TripExtendedMessage(user, extension, contact) {

  const sendSms = () => {

    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${user.firstName} has extended their trip by ${extension.label}. Please be on the lookout for a 'trip completed' confirmation message.`,
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
        if (response.status === 201) {
          Popup.alert(`'Trip extended' notification successfully sent to ${contact.value}!`)
          return response.text();
        } else {
          Popup.alert(`'Trip extended' notification was unsuccessful, \nplease contact ${contact.value} directly.`)
        }
      })
  }

  return (
    sendSms()
  )
}

export default TripExtendedMessage;