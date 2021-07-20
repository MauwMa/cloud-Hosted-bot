module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Koi és az Esti Színárnyalatok✠')
        .setURL('')
        .setDescription('Z2 új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/eFCzIFIZXXQC0kQNralbvjXI-s4v38hPeFux1ZboDR8/https/pbs.twimg.com/media/E6vW3ZLVcAEkG1h.jpg%3Alarge?width=1365&height=675')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}