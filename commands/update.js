module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Álmodás a nyitott ablakpárkányon★')
        .setURL('')
        .setTimestamp()
        .setDescription('Milyen csodás. Innen látható az egész kikötő pont ahogy a csillogó óceán... Óh Parancsnok, itt vagy hogy élvezd ezt a kilátást velem?\n\nYume Minami az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/p-wOLXwJvpgsFh-_Q4oQI8ZN2kU-oTqbtBrobWRt_AA/https/pbs.twimg.com/media/FE3zZfDVUAQxOpL.jpg%3Alarge?width=1239&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 