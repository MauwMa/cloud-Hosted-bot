const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember =>{
        const udvozloembed = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle(`Üdvözlünk az Azur Lane Magyar Szerverén`)
        .setThumbnail(guildMember.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Megérkezett a kikötőbe <@${guildMember.user.id}> Parancsnok nyaaa~`)
        .setFooter(`Üdv ${guildMember.user.username}#${guildMember.user.discriminator}`,guildMember.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
guildMember.guild.channels.cache.get('791934562409381888').send(udvozloembed)
});

client.login(process.env.token);