module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("♚Délutáni Rögtönzés♚")
        .setURL('')
        .setTimestamp()
        .setDescription('Szép napot, Parancs- Eeeh, úgy értem "Mester"? Ufff, habár jobban szeretlek Parancsnoknak hívni... Akárhogy is, gyakorlom a hegedülést, hogy jobb légkört teremtsek a bolt körül. Azért jöttél ide, mert ide csábított a zeném dallama?\n\nHMS Southampton új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok..')
        .setImage('https://images-ext-2.discordapp.net/external/ysd9nR9G1Z0XQSF9vbtI9YQB9q7Cid1rl6pokHHTezA/https/pbs.twimg.com/media/FHn8ilKUcAEHG-S.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 