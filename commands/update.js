module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok\n\n La Galissonniére L2D skine és a többi új skin 11/11 magyar időszámítás szerint reggel 7:00-ig lesz elérhető.')
        .setImage('https://images-ext-1.discordapp.net/external/oWde7_C6alQ3MNyU6KbOvwfhORttVNneVuZg72Y7O3g/https/pbs.twimg.com/media/FC8rCnxVkAQSf0Z.jpg%3Alarge?width=1127&height=555')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

