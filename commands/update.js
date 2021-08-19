module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('A Microlayer Dedley Szerencse Doboz 2021 elérhető egészen Szeptember 2 reggel 9:00 óráig!')
        .setImage('https://images-ext-1.discordapp.net/external/26_sz0l8HUk3pjvc3VxtaKzAgcIRhGFM1IoUFKJGuRM/https/pbs.twimg.com/media/E9KDqLGVkAMBDIT.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}