module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Szél lovagló★')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok, jöttél nézni a meccset? Tudod... Inkább lennék lent versenyezni, mintsem csak itt állni. Az érzés, hogy meg tudod lovagolni a szelet... Nem gondolod, hogy a versenyzés és a vitorlázás ugyan azon a lényegen osztozkodnak?\n\nUSS Enterprise az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/cDmQWZLrEHjuTdHkrTryy8MdxhpFbctypV7wJZmMczQ/https/pbs.twimg.com/media/FDlG2ZVVUAAlbRv.jpg%3Alarge?width=1060&height=555')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}