const schedule = require('node-schedule');
module.exports = {
    name: 'egyora',
    permissions: ["MENTION_EVERYONE"],
    description: 'egyora',
    execute (client, message, args, Discord){
        var exportScheduler = schedule.scheduleJob('0 40 6 08 4 *', function() { 
            const egyora = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
            .setTitle('Értesítés!')
            .setURL('')
            .setDescription('20 perces előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 8 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
            .setImage('https://images-ext-1.discordapp.net/external/POW9Zcg0jlIx3yQZzLwD7S82LiDA-104cmXijUe4MFc/https/pbs.twimg.com/media/FOW3x8RVUAI1NHK.jpg?width=860&height=491')
            .setTimestamp()
            client.channels.cache.find(channel => channel.id === "789936292413571102").send(egyora); 
        });
    }    
}