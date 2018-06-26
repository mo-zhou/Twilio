// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messaging.services
                .create({
                   //statusCallback: 'http://requestb.in/1234abcd',
                   friendlyName: 'Co-pilot API Service'
                 })
                .then(service => console.log(service.sid))
                .done();