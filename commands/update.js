module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚Mischief on the Rocks♚')
        .setURL('')
        .setDescription('HMS Abercrombie Ritsuko Akizuki új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/4rLgGkIuG3UmulbDe2AOXEpY05YtU9UzihSdQY0ClXA/https/pbs.twimg.com/media/E8UR6y7UYAQOsoQ.jpg%3Alarge?width=1026&height=560')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}