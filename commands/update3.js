module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok\n\nA jelenlegi event a Abyssal Refrain! Ezek a limitált karakterek az event építésben egészen Március 10.-ig lesznek elérhetőek.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/274814042_1665902797107506_8671470509112947035_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=veSNe-BxTUUAX-JPQGx&_nc_ht=scontent-vie1-1.xx&oh=00_AT-mWli6kzp4qu-FqC8K3gpsG0qL6trQeloYnjk6dnHXlA&oe=621DF62C')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}