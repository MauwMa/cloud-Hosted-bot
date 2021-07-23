module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\n A 765 Produkció bútorzatok elérhetőek egészen 8/5 09:00-ig. Ragadjátok meg ezt a bútorzat szettet, hogy megtapasztáljátok a csodálatos irodai környezetet.')
        .setImage('https://images-ext-2.discordapp.net/external/SrzZKxKnktVH8CNu_EKH7Mk6zhG4iQVFEVdi5Pc1ums/https/pbs.twimg.com/media/E69wxpaUUAMHuwN.jpg%3Alarge?width=958&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}