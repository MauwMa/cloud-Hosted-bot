module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("【Passionate Polaris】")
        .setURL('')
        .setTimestamp()
        .setDescription('Passionate Polaris event a következő karbantartás után bekerül a War Archives-ba..')
        .setImage('https://images-ext-2.discordapp.net/external/XMxk03Y3Mf260p_ZGo4ZkAqqJZOVACgc0GybquD4QVk/https/pbs.twimg.com/media/FIfD1xpUUAEbgR-.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 