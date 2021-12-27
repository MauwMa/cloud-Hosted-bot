module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚Bunkó Cseléd♚')
        .setURL('')
        .setTimestamp()
        .setDescription('Üdv, üdv. Cselédként dolgozok itt, mint ahogyan mondtad nekem. Öhm... Hívj ha már eldöntötted a rendelésed.\n\nHMS Penelope új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/ggfGTvDv0jXfM_39UhxvCuNkbPpWZhyIxyvAR6cZsU8/https/pbs.twimg.com/media/FHlWs3AVcAMGw03.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}