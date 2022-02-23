const schedule = require('node-schedule');
module.exports = {
    name: 'egyorateszt',
    permissions: ["KICK_MEMBERS"],
    description: 'egyorateszt',
    execute (client, message, args, Discord){
        var exportScheduler = schedule.scheduleJob('0 7 9 23 2 *', function() { message.channel.send("Akashi pénzt akar nyaaa~!"); 

            client.channels.cache.find(channel => channel.id === "853629612986990612").send(egyorateszt); 
        });
    }    
}