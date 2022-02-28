module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok\n\nNorthern Parliament lányai az új ruháikba öltöztek. Ezek a limitált kinézetek Március 10. magyar időszámítás szerint 7:59-ig lesznek elérhetőek.')
        .setImage('https://images-ext-2.discordapp.net/external/TYZ9NOC8R30AA3cf64VexaI5l0phDn16W-vFm2Rov84/https/pbs.twimg.com/media/FMhgI7hWQAQl_lV.jpg?width=932&height=468')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}