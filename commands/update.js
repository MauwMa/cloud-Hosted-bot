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
        .setDescription('Parancsnokok,\n\n Fürdőruhás skinek Amagira, Tosára és sok másra visszatértek. Magyar időszámítás szerint 10/27 8:59-ig lesznek elérhetőek.')
        .setImage('https://i.imgur.com/IyBX6Q8.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}