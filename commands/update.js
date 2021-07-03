module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Anchorage★')
        .setURL('')
        .setDescription('Pa... rancsnok? Nem... Tanár? Tancsi-tanár? Anchorage vagyok. Woohoo! Tanár! A kedvencem! Tanááááár! \n\nUSS Anchorage felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/212142023_1496438234053964_34196587938986942_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=Op1tu0BGYpMAX8Ll6Hz&_nc_ht=scontent-vie1-1.xx&oh=e4b73119e416c79ca6c9e7209752d188&oe=60E4A375')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}