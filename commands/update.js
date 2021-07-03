module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⛨Marco Polo⛨')
        .setURL('')
        .setDescription('Remélem tudod mit csinálsz, amiért felébresztettél engem. Hehehe... Vitézség és kúltúra parancsnokának nézel ki. Csodálatos! Én Marco Polo vagyok. Most hát, gyere! Az első ügyrendületünk az, hogy elterjesztjük Sardegna Empire dícsőségét keresztül a világon!\n\nRN Marco Polo felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/204493521_1495816017449519_7146274071691006615_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=WdiZ47toL2oAX9eaCHK&_nc_ht=scontent-vie1-1.xx&oh=6a1ad81e32fa0c6256c988eb91a0af57&oe=60E54E83')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}