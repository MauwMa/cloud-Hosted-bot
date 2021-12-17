module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Emlékeztető")
        .setURL('')
        .setTimestamp()
        .setDescription(`Parancsnok, a Scherzo of Iron and Blood event mostantól elérhető a war archivesban. Bismarck végre visszatért, hogy irányítsa az Iron Blood-ot!\n\nFanart: 中西 達哉 - (@tayatatsu)`)
        .setImage('https://images-ext-2.discordapp.net/external/6un64lgjxe9Wl16Db4VcsAvs9Cx7_tVb2b0XHIUU8o4/https/pbs.twimg.com/media/FGt0w64VcAIb4ym.jpg%3Alarge?width=974&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 