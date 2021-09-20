module.exports = {
    name: 'teszt2',
    description: 'teszt2',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const teszt2 = new Discord.MessageEmbed()
        .setColor('#2ecc70')
        .setTitle(`Title`)
        .setThumbnail(`https://c.tenor.com/EPOO70DkSO8AAAAi/azur-lane.gif`)
        .setDescription(`Description`)
        .setFooter(`footer`)
        message.channel.send(teszt2);

    }    
}