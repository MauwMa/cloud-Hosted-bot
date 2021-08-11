module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\n Posztolj meg egy 10 másodperces vagy hosszabb videót az Azur Lane kívánságaidról vagy a játék pillanatodról Twitteren vagy Facebookon a #AzurLane3rdAnniv hashtaggel ide (https://t.co/46UryzQ5Qo) és 200<:gems:790201608855486513> kapsz jutalomként.')
        .setImage('https://images-ext-2.discordapp.net/external/UU6eFeGfxdLNNk3JshbpxvaiSFo_5ptCULgdA4hjyNw/https/pbs.twimg.com/media/E8bxW1kWQBEUMkl.jpg%3Alarge?width=1240&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}