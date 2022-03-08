module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('🔥Scharnhorst META🔥')
        .setURL('')
        .setTimestamp()
        .setDescription('Scharnhorst vagyok az Iron Blood csatahajója. Lelkesen csatlakoztatnám erőinket olyan tehetséggel, mint te Parancsnok. Ne engedd, hogy az elvárásom kárbavésszen.\n\Scharnhorst META hamarosan leszáll közénk. Parancsnok, képes vagy legyőzni és betoboroznod a kikötődbe?')
        .setImage('https://images-ext-1.discordapp.net/external/imQYUzLuwMvaNDBCk3XFrQxrqBdmDZSoij9Gm9gyT9k/https/pbs.twimg.com/media/FNUjCiDacAEZyiS.jpg?width=917&height=468')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}