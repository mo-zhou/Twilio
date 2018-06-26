// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'McAvoy or Stewart? These timelines can get so confusing.',
         from: '*********', //with status call back
         statusCallback: 'https://still-reaches-98139.herokuapp.com/1nu4gbz1',
         to: '*********'
       })
      .then(message => console.log(message.sid))
      .done();