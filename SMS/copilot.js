
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messaging.services('MG435224f99286e248947e9363c8e09eb9')
                .phoneNumbers
                .each(phoneNumbers => console.log('this is your phone number sid:' + phoneNumbers.sid));
client.messages
      .create({
         body: 'Phantom Menace was clearly the best of the prequel trilogy. This is from your local area number, right?',
         messagingServiceSid: 'MG435224f99286e248947e9363c8e09eb9',
         to: '*********'
       })
      .then(message => console.log('this is the message sid: ' + message.sid))
      .done();