import Popup from "react-popup";

export function TripCompleteMessage(contact, user) {

  const sendSms = () => {
    console.log(contact, user)
    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${user.firstName} has confirmed their trip is completed. Thank you!`,
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
            Popup.alert(`Trip complete text message successfully sent to ${contact.value}! Thank you for using Walk Safe!`)
            return response.text();
          } else {
            console.log("API ERROR")
            Popup.alert(`Trip complete notification to your contact was unsuccessful, please contact ${contact.value}.`)
          }
        })
  }

  return(
      sendSms()
  )
}

export default TripCompleteMessage;