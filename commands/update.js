module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Rikka Takarada★')
        .setURL('')
        .setTimestamp()
        .setDescription('Rikka Takarada felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/KQ4KOJ0kYzh4ILHiIU_rTGks2_gr9KjZ8c8A90ZUuhc/https/pbs.twimg.com/media/FEo6RMcWUAMtRLF.jpg%3Alarge?width=1352&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

