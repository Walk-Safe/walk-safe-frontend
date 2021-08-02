import {toast} from "react-toastify";

export function TripExtendedMessage(user, extension, contact) {

  const notifySuccess = () => toast.success(`Trip extended notification successfully sent to ${contact.value}`);
  const notifyError = () => toast.error(`Trip extended' notification was unsuccessful, please contact ${contact.value} directly`);

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
          notifySuccess()
          return response.text();
        } else {
          notifyError()
        }
      })
  }

  return (
    sendSms()
  )
}

export default TripExtendedMessage;