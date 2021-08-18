module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Délutáni Nyújtózkodás★')
        .setURL('')
        .setDescription('USS Nautilus új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/5C5EvTbtl-5QiwG-qwslMcphDrhAtJIcodvP0iy1h1w/https/pbs.twimg.com/media/E8_vGqWUcAE715g.jpg%3Alarge?width=1240&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}