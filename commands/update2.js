module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠U-1206✠')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok! Igen, te! Gyere ide vissza! Köszöntened kellene engem! Ide figyelj, én vagyok az Iron Blood tengeralattjárója U-1206 és itt fogok szolgálni mától! És ne felejtsd el legközelebb!\n\nKMS U-1206 felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')        
        .setImage('https://images-ext-1.discordapp.net/external/OluTaVBlfW0jWbR2jIlqN8ZyPzO2IpS55C2VkaDPP9g/https/pbs.twimg.com/media/FHchkW8UUAAvACZ.jpg%3Alarge?width=1047&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}