module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Azusa Miura❀')
        .setURL('')
        .setDescription('Azusa Miura felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/W0rpRP4-AoCxwiCqxwQ8Cq2cIlbVfuvBFcM9ch0QWyY/https/pbs.twimg.com/media/E6k9h6OVUAELe5k.jpg%3Alarge?width=1090&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}