'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
    username: 'stornettatron3000',
    apiKey: '973c4a39-a9dd-4cd1-86c4-2701f1e8ac39',
    baseUrl: 'https://kik-echobot.ngrok.io/'
});

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
    message.reply(message.body);
});

// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);