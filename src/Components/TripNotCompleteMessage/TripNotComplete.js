
function TripNotCompleteMessage() {

  const sendSms = () => {

    let smsObj = {
      mobile_number: '17083630654',
      message: `{user.firstName + user.lastName} has not confirmed their trip is complete. Please contact them now.`,
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


export default TripNotCompleteMessage;