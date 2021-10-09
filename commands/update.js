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
        .setDescription('A nyuszi lány skinek magyar időszámítás szerint 10/14 reggel 08:00-ig lesznek elérhetőek.')
        .setImage('https://i.imgur.com/s4mTORC.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}