const schedule = require('node-schedule');
module.exports = {
    name: 'egyorateszt',
    permissions: ["KICK_MEMBERS"],
    description: 'egyorateszt',
    execute (client, message, args, Discord){
        var exportScheduler = schedule.scheduleJob('0 11 9 23 2 *', function() { message.channel.send("Akashi pénzt akar nyaaa~!"); 
        });
    }    
}