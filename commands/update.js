module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀És most a Varázs trükk❀')
        .setURL('')
        .setDescription('Voalá! Ne menj sehova, Parancsnok! A varázs műsor másodpercen belül kezdődik! Kezdésnek halljunk egy üvöltést! Rooaaar!\n\nIJN Yamakaze új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://i.imgur.com/OXprMyD.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}