module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Nem megszokott tőlem ez?☭")
        .setURL('')
        .setTimestamp()
        .setDescription('"Muhahaha... Most hát, ezek az utcák hozzám tartoznak..." Bocsi, megharaptam a nyelvemet... Hmm, elég nehéz ezt a szerepet játszani végül is.\n\nSN Avrora új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/6vY59s9DcjAmS26gbuwuDxc5DXdkIGtg5HJyeaMQ9ao/https/pbs.twimg.com/media/FL98J2bVUAI-dIz.jpg?width=881&height=468')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 