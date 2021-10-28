const schedule = require('node-schedule');
module.exports = {
    name: 'egyora',
    permissions: ["KICK_MEMBERS"],
    description: 'egyora',
    execute (client, message, args, Discord){
        var exportScheduler = schedule.scheduleJob('0 20 6 28 10 *', function() { 
            const egyora = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setTitle('Értesítés!')
            .setURL('')
            .setDescription('40 perces előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 6 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
            .setImage('https://i.imgur.com/0BEHNji.png')
            .setTimestamp()
            client.channels.cache.find(channel => channel.id === "789936292413571102").send(egyora); 
        });
    }    
}