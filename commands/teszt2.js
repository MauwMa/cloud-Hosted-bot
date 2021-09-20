module.exports = {
    name: 'teszt2',
    description: 'teszt2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const teszt2 = new Discord.MessageEmbed()
        .setColor('#2ecc70')
        .setTitle(`Title`)
        .setThumbnail(`https://c.tenor.com/7SPCcu15LtwAAAAi/azur-lane-cats.gif`)
        .setDescription(`Description`)
        .setFooter(`footer`)
        message.channel.send(teszt2);

    }    
}