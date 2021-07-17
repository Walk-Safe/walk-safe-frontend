const accountSid = 'ACc28ba49220aef1159538a4bd0d88631e'
const authToken = 'a526dda4accdd62fd0aaf328f9d6b5a5'

let client = require('twilio')(accountSid, authToken);


  client.messages
      .create({
        body: `{user.firstName + user.lastName} has started their trip. Please be on the look out for a message. 
      You will be notified once their trip is complete, or if you need to contact them.`,
        from: '+12406075663',
        to: '+17083630654',
      }, function (err, message) {
        if (err) {
          console.error('Text failed because: ' + err.message);
        } else {
          console.log('TripStartMessage sending completed. Enjoy your walk!');
        }
      });


  client.messages
      .create({
        body: `{user.firstName + user.lastName} has confirmed their trip is completed.`,
        from: '+12406075663',
        to: '+17083630654',
      }, function (err, message) {
        if (err) {
          console.error('Text failed because: ' + err.message);
        } else {
          console.log('Trip completed message sent!');
        }
      });


  client.messages
      .create({
        body: `{user.firstName + user.lastName} has not confirmed their trip is complete. Please contact them now.`,
        from: '+12406075663',
        to: '+17083630654',
      }, function (err, message) {
        if (err) {
          console.error('Text failed because: ' + err.message);
        } else {
          console.log('Your contact has been notified that your trip was not complete. Please contact them');
        }
      });
