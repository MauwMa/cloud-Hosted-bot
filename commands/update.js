module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Azur Lane | SSSS.GRIDMAN / SSSS.DYNAZENON Collaboration★')
        .setURL('')
        .setTimestamp()
        .setDescription('Megünneplésképp, a Főhadiszállás különleges ajándékot oszt ki, ami tartalmaz 2.000<:Olaj:790201521593122816>, 4.000<:Pnz:790201580812894218>, 50 cognitive arrayt és egyéb dolgokat a parancsnokoknak!')
        .setImage('https://images-ext-2.discordapp.net/external/LgIfXJivgMItT0KH2ziIbHy-bkmfgeW-IzVVf6QDEK4/https/pbs.twimg.com/media/FEo43q3XsAUuQ8e.jpg%3Alarge?width=1202&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

