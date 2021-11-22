module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Yume Minami★')
        .setURL('')
        .setTimestamp()
        .setDescription('Helló, Yume Minami a nevem. Ebbe a világba kerültem valamilyen ok miatt. Mindent megteszek, hogy részt vegyek a flottában, mint nehézcirkáló.\n\nYume Minami felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/4t_Bt3woHWEYy9tO7rlAyW5RMJ7LgSbOdT-7_m49DUU/https/pbs.twimg.com/media/FEt3bAJacAErVu1.jpg%3Alarge?width=1101&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

