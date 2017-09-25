const builder = require('botbuilder');
const express = require('express');

const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector, (session) => { //callback function called session
  let userMessage = session.message.text;
  session.send(`You said: ${userMessage}`); // session
  session.send('You said: %s', userMessage);
});

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(3003, function() {
//     console.log('My express app is listening on port 3003!');
// });
