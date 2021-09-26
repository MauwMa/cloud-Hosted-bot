module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Yuudachi (Retrofit)❀')
        .setURL('')
        .setDescription('Jelenleg Yuudachi a kikötőben van fejlesztés miatt. Hamarosan vízre lesz bocsájtva nyaaa~')
        .setImage('https://images-ext-1.discordapp.net/external/QIvzLzufvIhrD4DJQgQP2ga7dvQsM1pmaUoHPIki2p8/https/pbs.twimg.com/media/FAM6FrLUUAE0ASl.jpg%3Alarge?width=845&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}