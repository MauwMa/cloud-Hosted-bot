module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Ritsuko Akizukii❀')
        .setURL('')
        .setDescription('Ritsuko Akizuki felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/D8YRrSTQnIb4ZMrYAjUoSStCiR_Uo7RxMtXV8nSUGgs/https/pbs.twimg.com/media/E6e-CCwVEAIm1vx.jpg%3Alarge?width=1300&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}