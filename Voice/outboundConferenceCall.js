// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const conf = "AgentConf12";

client.conferences(conf).participants
      .create({from: '*********', to: '*********'}) //create an  outbound call to a phone numnber to initiate conference
      .then(participant => console.log(participant.callSid)) //the conference settings need to be enabled for agent calls
      .then()
      .done();
