module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Sengoku☆Smasher!❀')
        .setURL('')
        .setDescription('IJN Isokaze új ruhájába öltözik. A közeljövőben a dokkodban fog  várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/4u1evU3rO3elhk0eYwV6Rc6WT7lI6DFKpRNjVmMqqqE/https/pbs.twimg.com/media/E8gu8y8VUAEMj3x.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}