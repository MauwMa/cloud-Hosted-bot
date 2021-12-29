module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚A Szolgálatodra♚')
        .setURL('')
        .setTimestamp()
        .setDescription(`Remélem jól haladsz a munkáddal, Parancsnok! Azóta itt játszok a cicákkal, amióta végeztem a feladataimmal. Tessék, lefőztem egy kis friss teát, segíteni fog az újratöltödésben~\n\nHMS Icarus új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/lz3XdaVgZFH3-ug9DBweHu-oqEinTYMnY7SQfNTeovY/https/pbs.twimg.com/media/FHrsGS0UUAINDIi.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}