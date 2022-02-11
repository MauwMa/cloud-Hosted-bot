module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok,\n\nJelenleg megy a Northern Overture rerun event. Ezek a limitált karakterek 2/17 magyar időszámítás szerint 08:00-ig építhetőek.')
        .setImage('https://images-ext-1.discordapp.net/external/qMODT67iqEEBjd2oUYe_AMDiEjENkmPRPiEyhhN6rG0/https/pbs.twimg.com/media/FLUI7DQUcAEc5HA.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 