const schedule = require('node-schedule');
module.exports = {
    name: 'egyora',
    description: 'egyora',
    execute (client, message, args, Discord){



        var exportScheduler = schedule.scheduleJob('0 01 12 23 6 *', function() { 
            const egyora = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setTitle('Értesítés!')
            .setURL('')
            .setDescription('1 órás előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 4 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
            .setImage('https://i.imgur.com/0BEHNji.png')
            message.channel.send(egyora); 
        });

        //if (message.deletable) message.delete();
    }    
}