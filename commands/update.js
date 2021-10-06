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
        .setDescription('A jelenleg futó "Array Support Plan" event, amelyben küldetések teljesítésével Array, T1 Exp Data pakkokat és egyéb jutalmakra tehettek szert 11/11 magyar időszámítás szerint 08:00-ig lesz elérhető.')
        .setImage('https://images-ext-1.discordapp.net/external/e-ITop4dEK09gz6doLFu0WEIEZxgXhlc84BVViOf7So/https/pbs.twimg.com/media/FA8Bw8mVEAUioZe.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}