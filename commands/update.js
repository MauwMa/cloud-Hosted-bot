module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("✠Prinz Adalbert✠")
        .setURL('')
        .setTimestamp()
        .setDescription("Biztonságban ideértem a kikötőhöz! Itt az ideje körülnézni. A kérdés, hogy honnan kezdjem... Hm? Te vagy a parancsnok? Rendben. Hali, örvendek a találkozásnak és a többi. Később találkozunk~\n\nKMS Prinz Adalbert felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.")
        .setImage('https://images-ext-2.discordapp.net/external/2xJbUJaSIcXmsy04jd8pHoi3EMD1U9fDekCn7v1gc-Q/https/pbs.twimg.com/media/FHhIqIJVQAAVh39.jpg%3Alarge?width=1739&height=910')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 