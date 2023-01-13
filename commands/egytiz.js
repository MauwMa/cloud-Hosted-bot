const schedule = require('node-schedule');
module.exports = {
    name: 'egytiz',
    permissions: ["MENTION_EVERYONE"],
    description: 'egytiz',
    execute (client, message, args, Discord){
        var exportScheduler = schedule.scheduleJob('0 55 15 17 11 *', function() { 
            const egytiz = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
            .setTitle('Értesítés!')
             
            .setDescription('Előreláthatólag 5 perc maradt vissza a karbantartásból.\nParancsnokok készüljetek fel a csatára nyaaa~ 18:55')
            .setImage('https://images-ext-1.discordapp.net/external/TM3LkPEcz-XqPcUe-_4w1aBRW8PPU4VUAbiWplzeD7E/https/images-ext-1.discordapp.net/external/Y1t36P4Ri3O-Gu5z842HgcOMz2sayUOqxuvEyx9Uags/https/pbs.twimg.com/media/FUZoxvFUEAE_eGp.jpg')
            .setTimestamp()
            client.channels.cache.find(channel => channel.id === "853629612986990612").send(egytiz); 
        }); 
    }    
} 
