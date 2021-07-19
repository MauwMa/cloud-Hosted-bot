module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Mami Futami❀')
        .setURL('')
        .setDescription('Mami Futami felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/CNA0xfvYKgctF1L1oaJJAS08EBIoklp1b_DQwe3YcyQ/https/pbs.twimg.com/media/E6k-NQyVUAQGFC9.jpg%3Alarge?width=1090&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}