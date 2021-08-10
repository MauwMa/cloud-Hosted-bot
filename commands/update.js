module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('3. évforduló Élő Közvetítés')
        .setURL('')
        .setDescription('Parancsnokok, Enterprise szinkronszínésze, Ishikawa Yui (@YUI_STAFF) egy különleges üzenettel készült nektek~ A 3. évforduló közvetítés Augusztus 11. 5:00 magyar időszámítás szerint lesz YouTube-on!\n\n Élő Közvetítés: https://t.co/3yI8pymSTA\n\n #AzurLane #Yostar #AzurLane3rdAnniv https://t.co/69rNb5L7ci')
        .setImage('https://pbs.twimg.com/ext_tw_video_thumb/1424772663856144388/pu/img/rSqbhwB0nMk4yOkr.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}