const schedule = require('node-schedule');
module.exports = {
    name: 'egyora',
    permissions: ["KICK_MEMBERS"],
    description: 'egyora',
    execute (client, message, args, Discord){



        var exportScheduler = schedule.scheduleJob('0 00 6 8 7 *', function() { 
            const egyora = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setTitle('Értesítés!')
            .setURL('')
            .setDescription('1 órás előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 8 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
            .setImage('https://i.imgur.com/0BEHNji.png')
            client.channels.cache.find(channel => channel.id === "789936292413571102").send(egyora); 
        });
        if (message.deletable) message.delete();
    }    
}