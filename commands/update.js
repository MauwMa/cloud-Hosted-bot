module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀PJ Poker Party❀')
        .setURL('')
        .setTimestamp()
        .setDescription('Most te következel, Parancsnok! Melyik legyen az~? Biiiiiztos vagy, hogy ez a kártya legyen? ...Hallak, Suzuya! Ne mond el a Parancsnoknak milyenek a kártyák!\n\nIJN Kumano az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://i.imgur.com/Ygla43t.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}