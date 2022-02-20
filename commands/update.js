module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Kiev☭")
        .setURL('')
        .setTimestamp()
        .setDescription('Kiev vagyok a 48 Project osztályú Northern Parliament rombolója. Mostantól én fogok segíteni neked mindenféle dologban, Parancsnok... E-Ez, öhm, elég bemutatkozásnak?\n\nSN Kiev új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/GN4TGny2JquY79KPd3RVjKnMTRMJhwwLxXJw0QwcPZw/https/pbs.twimg.com/media/FL98jkMVQAAELqc.jpg?width=895&height=468')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 