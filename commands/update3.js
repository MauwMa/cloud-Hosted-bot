module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Boldog Karácsonyt')
        .setURL('')
        .setTimestamp()
        .setDescription('Boldog Karácsonyt, Parancsnok! New Jersey megérkezett az ajándékokkal mindenki számára! Ne felejtsétek megnézni az üzeneteiteket a játékban~\n\nFanart:うおのめうろこ (@uonomekouro) ')
        .setImage('https://images-ext-2.discordapp.net/external/t4yCy9fsNgsHRhMK7ApHqDy-L9yIJHz8_cPfFQ5e38Y/https/pbs.twimg.com/media/FHXyNFYVUAcdJvy.jpg%3Alarge?width=1202&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}