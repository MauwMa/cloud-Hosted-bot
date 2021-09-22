module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⚜Díszes Tánc⚜')
        .setURL('')
        .setDescription('Bár szerény lehet, de ez nem egy bájos kicsi kert? Gyere, Parancsnok! Táncoljunk Anyatermészettel körbevéve. \n\nFFNF Émile Bertin új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/RdX3o59jvVBnaQ5j77TFM5QocuZSQ4SG9FGbRbEywFA/https/pbs.twimg.com/media/E_zd0RkVQAEVqS4.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}