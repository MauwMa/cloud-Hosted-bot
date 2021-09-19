module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚A Macska és a Fehér Paripa♚')
        .setURL('')
        .setDescription('"Gazdám~ Eljöttem érted, hogy elvigyelek a bállba~" ... Pontosan ezt fogod megtenni? Eh, nem számít ki csinálja~ Csak az számít, hogy együtt leszünk~♪\n\nUHMS Cheshire az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/jfaFv4XLkB6lmA0dvxiIvZCW88nPCjITP6m44AzbkdI/https/pbs.twimg.com/media/E_o8ITxVIActtoJ.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}