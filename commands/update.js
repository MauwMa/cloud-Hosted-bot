module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【Operation Siren】')
        .setURL('')
        .setTimestamp()
        .setDescription('Az Operation Sirennek hamarosan jön az 5. Fejezete! Parancsnokok fel vagytok készülve rá?')
        .setImage('https://images-ext-2.discordapp.net/external/zPYmDQf-cA_RIbX6-bQet6_x6-heutJEDJCkSfiy4ik/https/pbs.twimg.com/media/FFquwP3VUAANkPz.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 