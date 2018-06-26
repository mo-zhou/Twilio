const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

//look up phone numbers that are not legitimate
var phoneNumbers = {a: +551155256325, b: +493019449, c: +4915735982887, d: +496979550, e: +493022610, f: +498969931333, g: +443432221234, h: +4916793929939, i: +17189237300, j: +4915735997026};
    
for (const num in phoneNumbers){
	client.lookups.phoneNumbers(phoneNumbers[num])
              .fetch({type: 'carrier'})
              .then(phone_number => console.log(phone_number.callerName))
              .done();
}
