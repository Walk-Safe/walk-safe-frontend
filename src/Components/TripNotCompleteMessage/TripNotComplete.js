import Popup from "react-popup";

function TripNotCompleteMessage(user, contact) {

  const sendSms = () => {

    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${user.firstName} has not confirmed their trip is complete. Please contact them now.`,
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
            console.log(response.status)
            Popup.alert(`${contact.value} has been notified you did not complete your trip. Please contact them.`)
            return response.text();
          } else {
            console.log("API ERROR")
            Popup.alert(`Trip not complete notification to your contact was unsuccessful, please contact ${contact.value}.`)
          }
        })
  }

  return(
      sendSms()
  )
}


export default TripNotCompleteMessage;