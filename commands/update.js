module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Promise Crate Augusztus 19. reggel 9:00 óráig elérhető!')
        .setImage('https://images-ext-2.discordapp.net/external/lE5YEzS0eL2qcy4pG5MNXFnN6ljX_QbBHptJh2zGToU/https/pbs.twimg.com/media/E9EApBGVUAsT0yr.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}