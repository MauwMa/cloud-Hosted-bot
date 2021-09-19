const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'valami');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('781214332583149599').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});

client.login(process.env.token);