const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();



['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on("message", (message) => {
    if (message.channel.id === '789938303590727700') {
 const str = "https://cdn.discordapp.com";
 if(message.content.startsWith(str))
 {message.delete();
}
}}
);


client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  
        game: {
            name: "Using !help",  
            type: "PLAYING: Azur Lane" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });



client.on('guildMemberAdd', guildMember =>{
        const udvozloembed = new Discord.MessageEmbed()
        .setColor('#2ecc70')
        .setTitle(`Üdvözlünk az Azur Lane Magyar Szerverén`)
        .setThumbnail(`https://c.tenor.com/7SPCcu15LtwAAAAi/azur-lane-cats.gif`)
        .setDescription(`Megérkezett a kikötőbe <@${guildMember.user.id}> Parancsnok nyaaa~`)
        .setFooter(`Üdv ${guildMember.user.username}#${guildMember.user.discriminator}`,guildMember.user.displayAvatarURL({dynamic: true, size: 512}))
guildMember.guild.channels.cache.get('889129697873637416').send(udvozloembed)
});

client.login(process.env.token);