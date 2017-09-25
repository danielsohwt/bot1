const builder = require('botbuilder');
const express = require('express');

const app = express();
const connector = builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID, //fit username and pw here
    appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

app.listen(3978, () => {
    console.log('Chatbot server started and listening to port 3978');
  });
app.post('/api/messages', connector.listen());

// const bot = new builder.UniversalBot(connector, (session) => {
//   session.send('You said: %s', session.message.text);
// });

const bot = new builder.UniversalBot (connector);

bot.dialog('/', (session)) => {
    if (!session.userData.name){
        session.beginDialog('greeting');
    },
    (session,args) 
}