module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Ami Futami❀')
        .setURL('')
        .setDescription('Ami Futami felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/_M3zF8XoI_WbXbkTz_QjtS4Mvgxtz-OdcWpeRu6MxZU/https/pbs.twimg.com/media/E6k940PUcAccrJz.jpg%3Alarge?width=1090&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}