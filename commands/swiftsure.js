module.exports = {
    name: 'swiftsure',
    description: 'swiftsure',
    execute (message, args, Discord){
        const swiftsure = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Swiftsure Build')
        .setURL('')
        .setDescription('trigger/ AA/ Survival/ Budget')
        .setImage('https://i.imgur.com/6TBcYmK.png')
        message.channel.send(swiftsure);

    }    
}