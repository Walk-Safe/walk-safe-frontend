import { toast } from 'react-toastify';


export function TripCompleteMessage(contact, user) {

  const notifySuccess = () => toast.success(`Trip completed notification successfully sent to ${contact.value}. Thank you for using Walk Safe`);
  const notifyError = () => toast.error(`Trip completed notification was unsuccessful, please contact ${contact.value} directly`);

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

export default TripCompleteMessage;