module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Főhadiszállás tisztában van a hálózati problémával, amit mindenki tapasztal. Jelenleg a probléma okát kutatjuk, köszönjük a türelmeteket és támogatásotokat.')
        .setImage('https://images-ext-1.discordapp.net/external/2fddijLmSP-q8Ze2ZSeE9ruK8JUbXxmKGx4vBTLe-Us/https/pbs.twimg.com/media/E8mK7OiUYAIFyMv.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}