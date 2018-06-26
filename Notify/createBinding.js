
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.notify.services('IS0ade5496a76bfc5e6562260f7eef148b')
             .bindings
             .create({
                identity: '00000001',
                bindingType: 'sms',
                address: '*********' //this is the phone number that needs to be binded to the identity in order to notify later
              })
             .then(binding => console.log(binding.sid))
             .done();
             