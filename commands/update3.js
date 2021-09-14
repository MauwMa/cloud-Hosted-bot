module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Chikuma❀')
        .setURL('')
        .setDescription('Chikuma vagyok. Örülök, hogy megismerhetlek. Nos, talán ez a helyzet, de én már tudok ezt-azt rólad... Óh, kíváncsi vagy? Rá fogsz jönni előbb vagy utóbb, hehe.\n\nIJN Chikuma felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://i.imgur.com/M1SSPAA.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}