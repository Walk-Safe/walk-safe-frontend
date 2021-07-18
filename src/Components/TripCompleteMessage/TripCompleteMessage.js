
export function TripCompleteMessage(contact, user) {

  const sendSms = () => {

    let smsObj = {
      mobile_number: '17083630654',
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
        .then(result => result.text())
        .then(resp => console.log(resp))
  }

  return(
      sendSms()
  )
}

export default TripCompleteMessage;