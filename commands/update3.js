module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok, a Virtuális Torony event elkezdődött! Impero és a többi Sardegna Empire tagok összegyűltek kivizsgálnia a Virtuális Tornyot.\n\nFanart: ショウイチ - (@ekakijin)')
        .setImage('https://images-ext-2.discordapp.net/external/4W7D239qorRi84m7Gv_qiWbnoyT3opKGZMm2eghB5xI/https/pbs.twimg.com/media/FOmKUoiVUAIWrnl.jpg?width=873&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}