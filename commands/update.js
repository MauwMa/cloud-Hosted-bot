module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setDescription('Parancsnokok,\n\nNéhány előző party skinek visszatértek limitált ideig. 10/14 Magyar időszámítás szerint reggel 09:00-ig lesznek elérhetőek. Ne hagyd ki az esélyt, hogy megszerezd őket!')
        .setImage('https://images-ext-2.discordapp.net/external/YSTWZQ7BXttHOgpKZZtwIiZGS54_rWPNHdrSKIpHXPw/https/pbs.twimg.com/media/E_-YGZqVgAEBwkV.jpg%3Alarge?width=1112&height=417')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}