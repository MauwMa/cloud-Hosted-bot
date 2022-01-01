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
        .setDescription('Parancsnokok,\n\n Boldog Új Évet! Z46 és Friedrich der Große megérkeztek, hogy velünk ünnepeljék meg az Új Évet!\n\nFanart: 薔薇缶 - (@canned_rose)')
        .setImage('https://images-ext-2.discordapp.net/external/sbvOCpoAB0tmaIn1HyLDf6gcIvubvNWgiezM_PuHFzQ/https/pbs.twimg.com/media/FH8G-3IVQAMkJSJ.jpg%3Alarge?width=974&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 