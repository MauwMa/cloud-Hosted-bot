module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Szabadnapi Randi★')
        .setURL('')
        .setTimestamp()
        .setDescription('Úgy érzem eleget shoppingoltunk már. Álljunk meg és pihenjünk egy kicsit, majd mennyünk újra egy kört~♪\n\nUSS Bremerton az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/vsGzrTP4iTGjHDFxmkt1e55rDfTYEqF1D2I1nS_CSgg/https/pbs.twimg.com/media/FFCoG53VgAwQSpz.jpg%3Alarge?width=1113&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 