
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
var localTime = new Date(Date.now()).toString();

console.log(localTime);

client.messages
  .create({
     body: 'Greetings! The current time is ' + localTime + ' .',
     //body: 'test',
     from: '*********',
     to: '*********'
   })
  .then(message => console.log(message.sid))
  .done();
