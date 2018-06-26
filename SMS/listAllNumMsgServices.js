const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messaging.services('Your Messaging Service SID')
                .phoneNumbers
                .each(phoneNumbers => console.log(phoneNumbers.sid));