module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok,\n\nEzek a visszatérő kinézetek Március 24 magyar időszámítás szerint 07:59-ig elérhetőek.')
        .setImage('https://images-ext-1.discordapp.net/external/VDVTUkMBd9SXj8FGG0oAEMRFQ4oXoz6q4CypwO6NIKY/https/pbs.twimg.com/media/FNpMS9haIAYLKLm.jpg?width=949&height=467')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}