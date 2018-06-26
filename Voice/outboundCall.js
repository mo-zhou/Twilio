
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         //url: 'https://handler.twilio.com/twiml/EH56030852c558e81f49ce3df2e8f2b848',
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '*********',
         from: '*********'
       })
      .then(call => console.log(call.sid))
      .done();