module.exports = {
    name: 'build-laffey',
    description: 'build-laffey',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const laffey = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Laffey Build')
        .setURL('')
        .setDescription('Auto(survival) | Manual | Auto(torp) | Budget')
        .setImage('https://i.imgur.com/cxohosG.png')
        .setTimestamp()
        message.channel.send(laffey);

    }    
}