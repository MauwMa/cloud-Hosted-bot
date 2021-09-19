const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember =>{

        const embed = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Tirpitz Build')
        .setURL('')
        .setDescription('AP | HE | Tank | Budget')
        .setImage('https://i.imgur.com/GkRDIm0.png')

    guildMember.guild.channels.cache.get('781214332583149599').send(embed)
});
client.login(process.env.token);