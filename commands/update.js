module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Iori Minase❀')
        .setURL('')
        .setDescription('Iori Minase felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/37p04_3wOW_2MoLm8Bl3IhuR1PNLTBuJvJPh6lj18tU/https/pbs.twimg.com/media/E6k9N8pUcAAgHGs.jpg%3Alarge?width=1090&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}