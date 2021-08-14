module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('2 Nap van hátra még a 3. Évfordulóhoz. Neptune, Gascogne és Prinz Eugen már gyülekezik~')
        .setImage('https://images-ext-2.discordapp.net/external/P55yOBaWVK5pmBkbks1HRsD0M_E30J3YrgKaRFh2Qa8/https/pbs.twimg.com/media/E8vEEQgVcAAQWkW.jpg%3Alarge?width=604&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}