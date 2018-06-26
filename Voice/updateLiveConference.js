const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const conf = "AgentConf12"; 


client.conferences.list({ friendlyName: conf }, function(err, data) {
    const conferenceSid = data[0].sid
    client.conferences(conferenceSid).participants.list(function(err, list) {
    	//setTimeout(5000)
      client.calls(list[0].callSid).update({ method: 'GET', url: 'https://www.twilio.com/quest/Z6CVAXG1SQBV5VH.mp3' }) //POST does not work
      .then(call => console.log(call))
      .catch((error) => {
        console.log(error);
        response.status(500).send(error);
        });
    });
  });