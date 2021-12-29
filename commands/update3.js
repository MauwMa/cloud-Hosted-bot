module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('A Shougatsu Szerencse Doboz 2022 karbantartás után lesz elérhető.')
        .setImage('https://images-ext-2.discordapp.net/external/KVxe03MvYPz7wE23cuMFxZl1K08rhLglXwxm3zGH4ik/https/pbs.twimg.com/media/FHxWyecVkAED-0F.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}