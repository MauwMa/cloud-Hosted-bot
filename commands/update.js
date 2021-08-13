module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('3 Nap van hátra még a 3. Évfordulóhoz. Tashkent, Chang Chun és Surcouf már várja az évfordulót~')
        .setImage('https://images-ext-2.discordapp.net/external/31jbrC70Ocz6DvHB96Ey87SL3jroP6fPmclkY8Zrsdk/https/pbs.twimg.com/media/E8pSbkOVIAASVJR.jpg%3Alarge?width=603&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}