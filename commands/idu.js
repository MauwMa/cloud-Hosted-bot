const schedule = require('node-schedule');
module.exports = {
    name: 'idu',
    description: 'idu',
    execute (client, message, args, Discord){

        var exportScheduler = schedule.scheduleJob('0 55 11 23 6 *', function() { 
            message.channel.send("Parancsnokok, véget ért a karbantartás.\nNe felejtsetek venni gemeket tőlem nyaaa~!\n everyone"); 
        });

        //if (message.deletable) message.delete();
    }    
}