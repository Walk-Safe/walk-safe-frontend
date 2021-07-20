
export function TripExtendedMessage(user, extension, contact) {

  const sendSms = () => {

    let smsObj = {
      mobile_number: `${contact.phone}`,
      message: `${user.firstName} has extended their trip by ${extension.label}. Please be on the lookout for the 'trip completed' confirmation message.`,
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

export default TripExtendedMessage;