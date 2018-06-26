
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messaging.services('MGf52bd5cfcdb1e994895ef4d2e70a1d8a')
                .phoneNumbers
                .create({phoneNumberSid: 'PNecf82bda067b25319e05ccc4d651c0bd'})
                .then(phone_number => console.log(phone_number.sid))
                .done();