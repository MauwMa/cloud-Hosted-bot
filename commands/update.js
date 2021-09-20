module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\na jelenlegi event a "Upon the Shimmering Blue". Ezeket a limitált karakterek magyar időszámítás szerint 10/4 08:59-ig lesznek elérhetőek építeni.')
        .setImage('https://images-ext-1.discordapp.net/external/jZnvLHNJkDy7O7uNlH_u8pD3ViiIVY1RTuJOLNeN_aQ/https/pbs.twimg.com/media/E_o8YvAVUAIzvfb.jpg%3Alarge?width=1112&height=571')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}