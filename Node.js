const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember =>{

        const embed = new Discord.MessageEmbed()
        //.setColor('#f2082d')
        //.setTitle('Z23 Build')
        //.setURL('')
        //.setDescription('Balanced | FP Meme | Tank | Budget')
        //.setImage('https://i.imgur.com/Vo48OAj.png')   

        .setColor('#f2082d')
        .setTitle(`Üvözlünk az Azur Lane Magyar Szerverén`)
        .setThumbnail(guildMember.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Hello <@${guildMember.user.id}>, Üvözlünk az Azur Lane Magyar Szerverén.`)
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')

    guildMember.guild.channels.cache.get('781214332583149599').send(embed)
});
client.login(process.env.token);