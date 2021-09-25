module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚A tisztaság esküje♚')
        .setURL('')
        .setDescription('Azta,,, Ez az én Egyenruhám a ceremóniára, ami a Tisztaság Esküje néven simert? Hohoho... Ez biztosan a sors. Csatlakozz hozzám, Parancsnok, és csináljuk újra igazzá a világot! ')
        .setImage('https://images-ext-2.discordapp.net/external/5g-giqIkOTjzNI44E2fc-oSYk7ZnRWtOvlDra2Wme7A/https/pbs.twimg.com/media/FAImM-JVUAA8lov.jpg%3Alarge?width=1172&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}