module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Tengerparti forgatás!★')
        .setURL('')
        .setTimestamp()
        .setDescription('Itt van Hass. Ma este, körbe sétáljuk a kikötőt éjszaka. Ééééés, egy különleges vendégünk lesz- a Parancsnok! ... Psszt, héj, goyrs nézz a kamerába!\n\nHass az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/9hYa_bv70L5WAe3PD-hQ4HwKujlffP1UTvdlasIoLTI/https/pbs.twimg.com/media/FE9m8PAVcAQ63q0.jpg%3Alarge?width=1239&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 