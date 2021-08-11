module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Reno Bunnino★')
        .setURL('')
        .setDescription('USS Reno az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog  várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/W5hd5fsSxbmRd5xAC0WkPO9ycxsd-mSYXNrY7SZsO2M/https/pbs.twimg.com/media/E8fNky0VUAIjdGf.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}