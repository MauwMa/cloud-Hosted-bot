module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('⛨Pompeo Magno⛨')
        .setURL('')
        .setTimestamp()
        .setDescription(`Pompey Kapitány a Nagyszerű megérkezett a kikötőbe! ...Err! Aham! Jó napokat neked, Parancsnok! Pompeo Magno vagyok Sardegna Empire-ből! Jelölj ki bármilyen és minden munkához engem, és egy szemvillantás alatt megcsinálom mindet!\n\nRN Pompeo Magno felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/TytTQoJMRrSXu-2siktwGKg4fJYfV9Z1nQ3EYz4uY_Y/https/pbs.twimg.com/media/FOIhTpaakAMA_s-.jpg?width=939&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}