module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Black Friday')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, a Black Friday megérkezett a Yostar boltba is 10%-os kedvezmény 100$ feletti rendelésre az ÖSSZES merchre belevéve az újakra is! Ha be akarod zsebelni őket, akkor ne hagyd ki~\n\nBolt Link: https://t.co/yaYKZ998xa')
        .setImage('https://i.imgur.com/Yqo9L91.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 