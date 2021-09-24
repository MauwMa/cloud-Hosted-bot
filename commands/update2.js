module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Lucky Box')
        .setURL('')
        .setDescription('A 2021-es Party Skin Zsákbamacska elérhető egészen 10/14 Magyar időszámítás szerint reggel 09:00-ig!')
        .setImage('hhttps://images-ext-1.discordapp.net/external/QFg7y3Ev8vRKkzgeKb1BAWDz4hsLhSAJHksLKwIJmoo/https/pbs.twimg.com/media/E_-Y1JkVUAQ7Dxl.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}