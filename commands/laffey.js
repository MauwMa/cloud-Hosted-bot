module.exports = {
    name: 'laffey',
    description: 'laffey',
    execute (message, args, Discord){
        const laffey = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Laffey Build')
        .setURL('')
        .setDescription('Auto(survival)/ Manual/ Auto(torp)/ Budget')
        .setImage('https://i.imgur.com/cxohosG.png')
        message.channel.send(laffey);

    }    
}