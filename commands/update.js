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
        .setDescription('Parancsnokok,\n\n az Azur Lane hivatalos Twitter oldala elérte a 270k követőt! New Jersey itt van, hogy velünk együtt ünnepelje meg ezt a mérföldkövet~\n\nFanart: hanusu - (Pixiv=2488853)')
        .setImage('https://images-ext-2.discordapp.net/external/7mXmUwyGA3o3_tInH89IU56kHQpxVfQ6HiQmaVMzAKk/https/pbs.twimg.com/media/FH7GchvVkAAJ082.jpg%3Alarge?width=1618&height=910')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 