//based on sender's location send a different message indiating your country


const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();
var array = [];


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  //var country = req.body.FromCountry;
  var messageArray = req.body.Body;
  var command = messageArray.split(' ')[0];
  var item = messageArray.split(' ').slice(1);
  console.log("the command is " + command);
  console.log("the item is " + item);

  if (command == 'Add') {
    array.push(item);
  }
  else if (command == 'List') {
    twiml.message('Your to do list is ' + array)
  }
  else if (command == 'Remove') {
    var n = messageArray.split(' ')[1];
    array.splice(n, 1);

  }
  else {
    twiml.message('You can text "Add", "List", or "Remove" to add, list, remove items from your personal list');
  }

console.log("the list you have is " + array);


  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.post('/status', (req, res) => {
  const messageSid = req.body.MessageSid;
  const messageStatus = req.body.MessageStatus;
  //const twilioSignature = req.header.X-Twilio-Signature; //need to check header name

  console.log(`SID: ${messageSid}, Status: ${messageStatus}`);

  res.sendStatus(200);
});

http.createServer(app).listen(8001, () => {
  console.log('Express server listening on port 8001');
});