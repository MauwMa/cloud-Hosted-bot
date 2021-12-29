module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("✠Városi Cselédlány✠")
        .setURL('')
        .setTimestamp()
        .setDescription("Keresztül jövök! Utat kérek! Óh, csak te vagy Parancsnok. Később beszélünk- kávét kell kiszállítanom.\n\nKMS U-47 új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok..")
        .setImage('https://images-ext-1.discordapp.net/external/mSeoEaCejVAipWGPIYyDFHrfqa59YZqhyS55a3arS4s/https/pbs.twimg.com/media/FHn3yNzVQAM-bjz.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 