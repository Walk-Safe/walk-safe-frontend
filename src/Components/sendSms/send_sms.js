
const client = require("twilio")(
    process.env.REACT_APP_TWILIO_ACCOUNT_SID,
    process.env.REACT_APP_TWILIO_AUTH_TOKEN
);

 async function TripStartMessage () {
  try {
    return await client.messages
            .create({
              body: `{user.firstName + user.lastName} has started their trip. Please be on the look out for a message. 
      You will be notified once their trip is complete, or if you need to contact them.`,
              from: '+18284758343',
              to: '+17083630654',
            });
      } catch (error) {
        console.log(error);
      }
      }

//
// export const TripCompleteMessage = (user, contactPhoneNumber) => {
//   client.messages
//       .create({
//         body: `${user.firstName + user.lastName} has confirmed their trip is completed.`,
//         from: '+18284758343',
//         to: '+17083630654',
//       }, function (err, message) {
//         if (err) {
//           console.error('Text failed because: ' + err.message);
//         } else {
//           console.log('Trip completed message sent!');
//         }
//       });
// }
//
// export const TripNotCompleteMessage = (user, contactPhoneNumber) => {
//
//   client.messages
//       .create({
//         body: `${user.firstName + user.lastName} has not confirmed their trip is complete. Please contact them now.`,
//         from: '+18284758343',
//         to: '+17083630654',
//       }, function (err, message) {
//         if (err) {
//           console.error('Text failed because: ' + err.message);
//         } else {
//           console.log('Your contact has been notified that your trip was not complete. Please contact them');
//         }
//       });
// }

export default TripStartMessage;