module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("【Az Új Korszak, Az Új Erő】")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, megszereztétek már An Shan és Chang Chun retrofitjét? Az event Február 10. magyar időszámítás szerint 08:00-kor fog végetérni.')
        .setImage('https://images-ext-2.discordapp.net/external/CwkXfQPr83ckOLs1Qscz2-hxiMWqpq54j4D3sMtIQa4/https/pbs.twimg.com/media/FKf76U_UYAIlfbY.jpg%3Alarge?width=1363&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 