module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("🌿Patricia🌿")
        .setURL('')
        .setTimestamp()
        .setDescription('Te vagy a Parancsnok, akiről már olyan sokat hallottam? A nevem Patricia Abelheim, de csak hívj Patty-nak. Örülök, hogy megismerhetlek. Azt hiszem számítani fogok rád egy ideig.\n\nPatricia felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://media.discordapp.net/attachments/853629612986990612/1044516079613005824/unknown.png?width=1193&height=671')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

   