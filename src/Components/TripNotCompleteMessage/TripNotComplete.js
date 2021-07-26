import {toast} from "react-toastify";


function TripNotCompleteMessage(user, contact) {

  const notifySuccess = () => toast.success(`${contact.value} has been notified that you did not complete your trip in time. Please contact them as soon as possible`);
  const notifyError = () => toast.error(`Trip not complete notification was unsuccessful, please contact ${contact.value} directly`);

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
            notifySuccess()
            return response.text();
          } else {
            notifyError()
          }
        })
  }

  return(
      sendSms()
  )
}


export default TripNotCompleteMessage;