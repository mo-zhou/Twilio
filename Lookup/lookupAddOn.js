//SDK Version: 3.x
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.lookups.phoneNumbers('*********') //Look up a phone number through Twilio Add-ons
              .fetch({addOns: 'nextcaller_advanced_caller_id'})
              .then(phone_number => console.log(phone_number.addOns.results.nextcaller_advanced_caller_id.result.records)) //this is for advanced caller ID by next caller
              //.then(phone_number => console.log(phone_number.addOns.results.whitepages_pro_caller_id.result)) //this is for white pages pro caller
              .done();