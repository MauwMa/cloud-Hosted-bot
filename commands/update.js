module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Esti Kikapcsolódás★')
        .setURL('')
        .setTimestamp()
        .setDescription('Tekintetedre és a folyamatos győzelmeidre, Parancsnok. Hehe, ma este rumos kedvembe vagyok. Csatlakozol hozzám egy ideig?\n\nUSS New Orleans az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/pAmQeSCoeMrqVr654uzM4G5ByWccefbuHjT6YQU5oBE/https/pbs.twimg.com/media/FGQosFhUUAE5oqJ.jpg%3Alarge?width=1010&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 