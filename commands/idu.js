const schedule = require('node-schedule');
module.exports = {
    name: 'idu',
    description: 'idu',
    execute (client, message, args){

        var exportScheduler = schedule.scheduleJob('0 40 13 23 6 *', function() { 
            message.channel.send("idu"); 
        });

        //if (message.deletable) message.delete();
    }    
}