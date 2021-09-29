module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【Cruise Missions】')
        .setURL('')
        .setDescription('Cruiser Mission elvégzésével a Parancsnokok jutalmakra tehetnek szert ingyen, mint Fusou META. Emellett, Parancsnokok meg tudják venni a "Fair Winds Cruise Pass"-t és elvégezni a Cruise Missions-t, amiért Yorktown skint és egyébb dolgokat kapnak. ')
        .setImage('https://images-ext-1.discordapp.net/external/NAGl8kvxkyMRU9L-DdSdY_Iv5NH8irc1gNgbUZ_muoI/https/pbs.twimg.com/media/FAcAbArVQAIHtcq.jpg%3Alarge?width=1020&height=556')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}