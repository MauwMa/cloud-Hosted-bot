module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Boldog Halloweent! Parancsnok, úgy tűnik San Francisco, Glowworm és Abercrombie készen állnak hogy meglepjenek, te fel vagy készülve rá?')
        .setImage('https://images-ext-2.discordapp.net/external/3BOuFRRi7B0ZeGVEFETsWt7Q-jIqdMKrKLeSZmfNko8/https/pbs.twimg.com/media/FC3XNiWVcAcJ44M.jpg%3Alarge?width=989&height=556')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}