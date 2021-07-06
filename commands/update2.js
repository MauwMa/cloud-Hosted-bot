const schedule = require('node-schedule');
module.exports = {
    name: 'update2',
    permissions: ["KICK_MEMBERS"],
    description: 'update2',
    execute (client, message, args, Discord){
            const update2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('❀Hakuryuu❀')
            .setURL('')
            .setDescription('Szóval ez a kölök lenne a parancsnok? Hakuryuu a nevem. Figyelj jól - próbálj meg irányítani, és nevetségtárgyává fogod tenni magad. Emlékezz erre! \n\nIJN Hakuryuu felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
            .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/204119968_1495824594115328_8251861718593711801_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=SwCg8AkkLm8AX84m1sN&_nc_ht=scontent-vie1-1.xx&oh=e4360e117830f3e1859afc1d2a0823ca&oe=60E4103C')
            client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2); 
        //if (message.deletable) message.delete();
    }    
}