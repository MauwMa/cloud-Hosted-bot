module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠August von Parseval✠')
        .setURL('')
        .setDescription('Végre eljöttél, hűségesem... Elnézést, én "parancsnokom". Unhulde, August von Parseval vagyok. Örvendek a találkozásnak \n\nKMS August von Parseval felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/207872992_1497336647297456_6572164953915743571_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=ytPLYhx67wQAX-Ai4Bc&_nc_ht=scontent-vie1-1.xx&oh=07adfc63d0a72f8079879b54a8bd5034&oe=60E72CA6')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}