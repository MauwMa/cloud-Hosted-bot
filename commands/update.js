module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Haruka Amami❀')
        .setURL('')
        .setDescription('Haruka Amami felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/217558418_1505998573097930_8436897669049415283_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=cfbs3ujWhiIAX_KOoPX&_nc_ht=scontent-vie1-1.xx&oh=03b309b4db79502fc4e701efca3696ca&oe=60F7981F')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}