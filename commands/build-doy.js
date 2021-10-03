module.exports = {
    name: 'build-doy',
    description: 'build-doy',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const doy = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Duke of York Build')
        .setURL('')
        .setDescription('vs med-heavy | Faster First | VS Light | Budget')
        .setImage('https://i.imgur.com/rqwMd6J.png')
        .setTimestamp()
        message.channel.send(doy);

    }    
}