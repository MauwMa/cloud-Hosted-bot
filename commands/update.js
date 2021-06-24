module.exports = {
    name: 'update',
    description: 'update',
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Shirayuki❀')
        .setURL('')
        .setDescription('IJN Shirayuki felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/Po8OR4Sgv-OBMf4otnryDwVPY1FaidIVgUtsyyaRVVQ/https/pbs.twimg.com/media/E4lM1cUVoAU8XlK.jpg%3Alarge?width=1194&height=625')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}