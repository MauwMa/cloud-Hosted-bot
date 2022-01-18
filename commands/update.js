module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Virágzó Tavasz, Fénylő Hold❀")
        .setURL('')
        .setTimestamp()
        .setDescription('A Lunar Új Évre milyen virágokkal kellene feldíszítenem az irodát? Ááh, Nem tudom eldönteni! Öhm, Parancsnok, átnézed belülről? Körbe vezetlek! Fuuh...\n\nIJN Hanazuki új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/ICsGflBm-vd732TaCiZD0BPUFss7tvyj46WO03QEp2A/https/pbs.twimg.com/media/FJT92K-acAA0bjJ.jpg%3Alarge?width=1034&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 