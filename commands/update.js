module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Chihaya Kisaragi❀')
        .setURL('')
        .setDescription('Chihaya Kisaragi felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/218858097_1506670616364059_3215723211319590926_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=NWKH7ltZ2Y0AX8PTGNe&_nc_oc=AQn66guQQV3yV7Onm-Leata4GvlUqkFmntcM3SZwW-CwVTKrR0HcgU958lPY1hb3aTbP4cxXtnYjbNHSkxd0GvIs&_nc_ht=scontent-vie1-1.xx&oh=d29c77a9dab650ce95677a3b19af33f2&oe=60F8BB6A')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}