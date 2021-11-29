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
        .setDescription('Ezek a limnitált skinek az Auzr Lane | SSSS.GRIDMAN / SSSS.DYNAZENON Collabból magyar időszámítás szerint 12/9 7:59-ig lesznek elérhetőek.')
        .setImage('https://images-ext-1.discordapp.net/external/gBHlq1hulHLjrGxYOK_VfhSjdYvInu0r44wvoqXsiFw/https/pbs.twimg.com/media/FFRn0ndaQAIbi_M.jpg%3Alarge?width=1847&height=910')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 