import Popup from "react-popup";

function TripNotCompleteMessage(user, contact) {

  const sendSms = () => {

    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${user.firstName} has not confirmed their completed trip in time. Please contact them immediately.`,
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
            Popup.alert(`${contact.value} has been notified that you did not complete your trip in time. \nPlease contact them as soon as possible.`)
            return response.text();
          } else {
            Popup.alert(`'Trip not complete' notification was unsuccessful, \nplease contact ${contact.value} directly.`)
          }
        })
  }

  return(
      sendSms()
  )
}


export default TripNotCompleteMessage;