module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png%22")
        .setTitle("🌿Tündéri Álmodó a Csillagos Ég Alatt🌿")
        .setURL('')
        .setTimestamp()
        .setDescription(`Elegáns zöldellő, tiszta azúrkék. Soha nem tudtam, hogy a kikötőben van ilyen csodálatos hely... Óh, Parancsnok, te is éjszakai sétán vagy?\n\Serri az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)
        .setImage('https://media.discordapp.net/attachments/853629612986990612/1044891656991817768/unknown.png?width=1193&height=671')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send('Elküldtem az updatet nyaaa~');  
          }
    }
}