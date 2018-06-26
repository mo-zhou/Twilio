//based on sender's location send a different message indiating your country


const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  var country = req.body.FromCountry;
  twiml.message('Hi! It looks like your phone number was born in ' + country + '.');

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(8001, () => {
  console.log('Express server listening on port 8001');
  //console.log(app);
});