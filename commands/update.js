module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Vakáció kettőnek★')
        .setURL('')
        .setTimestamp()
        .setDescription('Üdv újra itthon, Parancsnok. Jó sok cuccot hoztál nekem, mi? Akkor hát, ne csak álldogálj ott, siess és gyere ide hozzám~\n\nAkane Shinjo az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/YZO1LiSXKeLOwTFMC_grafj43r3eD-qF-wyzuIoTl1I/https/pbs.twimg.com/media/FEy39G3VQAses4L.jpg%3Alarge?width=1239&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

