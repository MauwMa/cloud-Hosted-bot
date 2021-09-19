const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember =>{

        const embed = new MessageEmbed()
        .setTitle(`Welcome To ${member.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Hello <@${member.user.id}>, Welcome to **${member.guild.name}**. Thanks For Joining Our Server.
Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}. Have a Nice Time.
Chat In <#787083837833871404>`)
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')

    guildMember.guild.channels.cache.get('781214332583149599').send(embed)
});
client.login(process.env.token);