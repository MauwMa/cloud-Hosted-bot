module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('【Cruise Missions】')
        .setURL('')
        .setTimestamp()
        .setDescription('Cruiser Mission elvégzésével a Parancsnokok jutalmakra tehetnek szert ingyen, mint Yamashiro META. Emellett, Parancsnokok meg tudják venni a "Fair Winds Cruise Pass"-t és elvégezni a Cruise Missions-t, amiért Enterprise skint és egyébb dolgokat kapnak.')
        .setImage('https://i.imgur.com/c7tujK4.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}