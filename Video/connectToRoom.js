//How to join a conferene room

var Video = require('twilio-video');

Video.connect(''$TOKEN', {name:'my-new-room'}').then(function(room) {
  console.log('Successfully joined a Room: ', room);
}, function(error) {
    console.error('Unable to connect to Room: ' +  error.message);
});