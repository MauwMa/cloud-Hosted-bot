module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Náyrközi Pihenés❀')
        .setURL('')
        .setDescription('Azusa Miura új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/gueHzJMFr3lF0QHokgXIPfT-9DifY4M9hV7wFBwJd5U/https/pbs.twimg.com/media/E6vV0KLVgAgfmqU.jpg%3Alarge?width=1300&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}