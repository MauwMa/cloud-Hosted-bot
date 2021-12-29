module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠The Conquered Unhulde✠')
        .setURL('')
        .setTimestamp()
        .setDescription('Teljesen gubancos a hajam... Ezt pedig így. Nem, nem kell segítség. Azért vagyok itt, hogy az álmaid flottájában szolgáljalak. Élvezd amíg tart. Hehehe.\n\nKMS August von Parseval új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/daopO5wDCa2zEhmkzeC57ycsaG7hqQ_9sn_UTnrPBp8/https/pbs.twimg.com/media/FHsNeWoVQAExw9P.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}