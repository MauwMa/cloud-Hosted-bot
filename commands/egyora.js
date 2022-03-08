const schedule = require('node-schedule');
module.exports = {
    name: 'egyora',
    permissions: ["MENTION_EVERYONE"],
    description: 'egyora',
    execute (client, message, args, Discord){
        var exportScheduler = schedule.scheduleJob('0 0 6 10 3 *', function() { 
            const egyora = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
            .setTitle('Értesítés!')
            .setURL('')
            .setDescription('1 órás előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 8 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
            .setImage('https://images-ext-2.discordapp.net/external/5v50XmQ9nF9KyOXWmb0nOWfrE2ORMd0UFkonjtTr7Ec/https/pbs.twimg.com/media/FNQCnhJakAgtc2h.jpg?width=820&height=468')
            .setTimestamp()
            client.channels.cache.find(channel => channel.id === "789936292413571102").send(egyora); 
        });
    }    
}