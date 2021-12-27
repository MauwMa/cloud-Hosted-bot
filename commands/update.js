module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("✠A Kosz Háború Krónikák✠")
        .setURL('')
        .setTimestamp()
        .setDescription("Hegyezd szemed eme kis koszra. Amennyire biztos voltam a takarításban, nem hagyhatom ezt a koszt a helyén. Csatlakozol hozzám ebben a csatában?\n\nKMS Z46 új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.")
        .setImage('https://images-ext-1.discordapp.net/external/bZtagAG6_fFpBM8tve0f7P-YexnWASXsgEETAOjwkaY/https/pbs.twimg.com/media/FHciXj7VIAU2eyY.jpg%3Alarge?width=950&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 