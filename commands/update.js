module.exports = {
    name: 'update',
    description: 'update',
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Kazagumo❀')
        .setURL('')
        .setDescription('IJN Kazagumo felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/VnPZpv5uKDwi_-JrzaPieTAwEa-4JjzHx0YORi-U5js/https/pbs.twimg.com/media/E4i5ZvsUUAYR7Ii.jpg%3Alarge?width=1291&height=676')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}