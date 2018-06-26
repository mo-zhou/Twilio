const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

//client.conferences.each(conferences => console.log(conferences.sid));

client.conferences.each({
                     friendlyName: 'MyRoom',
                     status: 'in-progress'
                   },
                       conferences => console.log(conferences.sid)
                   );

client.conferences('*****Conference SID******')
      .participants
      .each(participants => console.log(participants.callSid));
