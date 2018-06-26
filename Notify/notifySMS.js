
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.notify.services('IS0ade5496a76bfc5e6562260f7eef148b')


             .notifications
             .create({
                body: 'Knok-Knok! This is your first Notify SMS',
                toBinding: {
                  binding_type: 'sms',
                  address: '*********' //not working for Node
              },
                identity: ['identity']
              })
             .then(notification => console.log(notification.sid))
             .done();
             