module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('【Moonlit Overture】')
        .setURL('')
        .setTimestamp()
        .setDescription('"Moonlit Overture" event véglegesen bekerül a War Archivesba a következő karbantartás után. ')
        .setImage('https://images-ext-2.discordapp.net/external/aQ9XBXflgSIkzGFAdj1EdRT7p_A9PHxjURuD3E1LOnk/https/pbs.twimg.com/media/FPWOEDSVQAg6OMP.png')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}