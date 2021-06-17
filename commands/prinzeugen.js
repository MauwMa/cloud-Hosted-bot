module.exports = {
    name: 'prinzeugen',
    description: 'prinzeugen',
    execute (message, args, Discord){
        const prinzeugen = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Prinz Eugen Build')
        .setURL('')
        .setDescription('AP/ More AP/ HE but why?/ Budget')
        .setImage('https://i.imgur.com/WTjv45F.png')
        message.channel.send(prinzeugen);

    }    
}