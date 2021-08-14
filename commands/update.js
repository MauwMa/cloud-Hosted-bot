module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【Microlayer Medley Rerun】')
        .setURL('')
        .setDescription('Parancsnok, Microlayer Medley rerun event visszatér a következő karbantartás után. Készen állsz találkozni Bremerton, Reno és a többi új karakterekkel?')
        .setImage('https://images-ext-1.discordapp.net/external/rZJUR4qpBaLiJVXys_KRP88rMrMiH1FT0Xfb228Grz0/https/pbs.twimg.com/media/E8qiivPVIAAa9mR.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}