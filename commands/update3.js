module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(``)
        .setURL('')
        .setDescription(`Parancsnokok, Boldog Hálaadást! Mint ahogy láthatjátok, a lányok élvezik az ételüket~\n-San Diego, ébredj~ A Parancsnok itt van~-\nBoldog ünnepeket kívánunk!`)
        .setImage('https://images-ext-2.discordapp.net/external/1x1Lngt3X7s1TH5LRAR752tV6Nt-0icZTYeWSoK6LmA/https/pbs.twimg.com/media/FiKSjSOUoAA8354.jpg')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}  