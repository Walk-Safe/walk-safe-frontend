const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export const tripStartMessage = (user, contactPhoneNumber) => {
  client.messages
      .create({
        body: `${user.firstName + user.lastName} has started their trip. Please be on the look out for a message. 
      You will be notified once their trip is complete, or if you need to contact them.`,
        from: '+18284758343',
        to: '+17083630654',
      }, function (err, message) {
        if (err) {
          console.error('Text failed because: ' + err.message);
        } else {
          console.log('Message sending completed. Enjoy your walk!');
        }
      });
}

export const tripCompleteMessage = (user, contactPhoneNumber) => {
  client.messages
      .create({
        body: `${user.firstName + user.lastName} has confirmed their trip is completed.`,
        from: '+18284758343',
        to: '+17083630654',
      }, function (err, message) {
        if (err) {
          console.error('Text failed because: ' + err.message);
        } else {
          console.log('Trip completed message sent!');
        }
      });
}

export const tripNotCompleteMessage = (user, contactPhoneNumber) => {
  client.messages
      .create({
        body: `${user.firstName + user.lastName} has not confirmed their trip is complete. Please contact them now.`,
        from: '+18284758343',
        to: '+17083630654',
      }, function (err, message) {
        if (err) {
          console.error('Text failed because: ' + err.message);
        } else {
          console.log('Your contact has been notified that your trip was not complete. Please contact them');
        }
      });
}
