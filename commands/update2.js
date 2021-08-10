module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\nA 3. évforduló megünepléseképp, az első <:gems:790201608855486513> vásárlás duplázási bónusza reszetelve lesz Augusztus 12.-én.')
        .setImage('https://images-ext-1.discordapp.net/external/fMI3LDZ3m65PsDUbE_efpfzgB4P8nZculhDxbv8ib58/https/pbs.twimg.com/media/E8WyTTbUYAg3hpu.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}