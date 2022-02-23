const schedule = require('node-schedule');
module.exports = {
    name: 'egyorateszt',
    permissions: ["KICK_MEMBERS"],
    description: 'egyorateszt',
    execute (client, message, args, Discord){
        var exportScheduler = schedule.scheduleJob('0 59 8 23 2 *', function() { 
            const egyorateszt = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
            .setTitle('Értesítés!')
            .setURL('')
            .setDescription('1 órás előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 8 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
            .setImage('https://images-ext-2.discordapp.net/external/PGLOP1lyRoOuSu0_VOVLG4pDYnNQRtj_iBvYnSzdF30/https/pbs.twimg.com/media/FE21HPTVUAEzk36.jpg%3Alarge?width=965&height=551')
            .setTimestamp()
            client.channels.cache.find(channel => channel.id === "791956226521956394").send(egyorateszt); 
        });
    }    
}