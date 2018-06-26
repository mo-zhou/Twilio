const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Phantom Menace was clearly the best of the prequel trilogy. API co-pilot Msg Sent',
         messagingServiceSid: 'Your Messaging Service SID',
         to: '*********',
         from: '*********'
       })
      .then(message => console.log(message.sid))
      .done();