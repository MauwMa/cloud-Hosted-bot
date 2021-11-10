module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok\n\n A Cognitive Array Support Terv event 11/11 magyar időszámítás szerint 08:00-kor ér véget. Kérjük mindenki szedje ki a jutalmakat, amíg lehet.')
        .setImage('https://images-ext-2.discordapp.net/external/292RaXOWs_MyoaQpMk48qXGB0yT8_ns7dM5Gr8dJp18/https/images-ext-1.discordapp.net/external/e-ITop4dEK09gz6doLFu0WEIEZxgXhlc84BVViOf7So/https/pbs.twimg.com/media/FA8Bw8mVEAUioZe.png%253Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

