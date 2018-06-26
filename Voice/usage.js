const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

//client.usage.records.each((record) => console.log(record.category));
//console.log('newline');
client.usage.records.today
	.each({category: 'calls'}, (record) => console.log(record.count));
