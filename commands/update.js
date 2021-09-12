module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀A Csillogó Kéken❀')
        .setURL('')
        .setDescription('Az új Sakura Empire főesemény, A Csillogó Kéken, Szeptember 16.-án fog kezdődni. Ez az event az új Ur rombolót, Shimakazét mutatja be.\n\nMaradj Résen!')
        .setImage('https://images-ext-2.discordapp.net/external/T3kk0vb7FwQ4e7P5wfQ_xkGBEa46doO22VoQA4ZDKxg/https/pbs.twimg.com/media/E_FhMaaWYAYhnWq.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}