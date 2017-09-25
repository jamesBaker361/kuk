

/*request.post({
    url: "https://api.kik.com/v1/config",
    auth: {
        user: "stornettatron3000",
        pass: "973c4a39-a9dd-4cd1-86c4-2701f1e8ac39"
    },
    json: {
        "webhook": "http://kuk-drkikbot.193b.starter-ca-central-1.openshiftapps.com/", 
        "features": {
            "receiveReadReceipts": false, 
            "receiveIsTyping": false, 
            "manuallySendReadReceipts": false, 
            "receiveDeliveryReceipts": false
        }
    }
}, function(){

});*/

var util = require('util'),http = require('http'),Bot  = require('@kikinteractive/kik'),express=require('express'),app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'index.html');
})

// Configure the bot API endpoint, details for your bot
var bot = new Bot({
    username: 'stornettatron3000',
    apiKey: '973c4a39-a9dd-4cd1-86c4-2701f1e8ac39',
    baseUrl: 'http://kuk-drkikbot.193b.starter-ca-central-1.openshiftapps.com/'
});

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
    console.log(message);
    message.reply(message.body);
});

// Set up your server and start listening
//let server = http.createServer(bot.incoming()).listen(process.env.PORT || 8080);

