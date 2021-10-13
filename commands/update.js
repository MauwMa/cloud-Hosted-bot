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
        .setDescription('Parancsnokok\n\nA parti skinek 10/14 magyar időszámítás szerint 09:00-ig lesznek elérhetőek.')
        .setImage('https://i.imgur.com/WjMv86E.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}