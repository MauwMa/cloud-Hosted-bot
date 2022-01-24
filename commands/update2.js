module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('★Mese a Császárságból★')
        .setURL('')
        .setTimestamp()
        .setDescription(`Boldog Hold Új Évet, Parancsnok! Végre eljött az idő, hogy belenézzünk a Dragon Empery régi legendáiba! Az igazság eme legendák mögött, hogy olyan lenyűgőzőek legyenek, mint maguk a legendák!\n\nUSS Bristol új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/iAk8s0mFK8gxUgyv9kCYa468TmvDo2E1880y9egDGIc/https/pbs.twimg.com/media/FJwZyU8VgAAq4k6.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}