module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("❀Mikulás Eltévedt Segéde!❀")
        .setURL('')
        .setTimestamp()
        .setDescription("Vigyázz! Félre, Parancsnok! ...Fuh. Hogy megmagyarázzam, segítek a Mikulásnak kiosztani a karácsonyi ajándékokat! Most ha megbocsájtasz, nem húzhatom az időt vagy elkések... Várj, rossz helyre jöttem? MICSODA?!\n\nIJN Akatsuki új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.")
        .setImage('https://images-ext-2.discordapp.net/external/m9j0iwAdVqoHG8Y07o2n6MTVDc0eMkOWIXwrox25yn0/https/pbs.twimg.com/media/FHMzWVaVkAA9Ffe.jpg%3Alarge?width=1005&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 