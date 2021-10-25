module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⛨Heverésző Smaragd⛨')
        .setURL('')
        .setTimestamp()
        .setDescription('Hellóka. Bocsásd meg a lenge öltözetemet. Alig van bármilyen okom arra, hogy extravagáns ruhát hordjak másoktól távoli privát helyemen.\n\nRN Littorio az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/wGLixZtox-5Jv5zYHZ8CTny-d2AjiM3GtE5FtTUmhL4/https/pbs.twimg.com/media/FCiqGseVkAYk752.jpg%3Alarge?width=1202&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}