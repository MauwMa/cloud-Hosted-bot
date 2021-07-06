module.exports = {
    name: 'build-swiftsure',
    description: 'build-swiftsure',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const swiftsure = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Swiftsure Build')
        .setURL('')
        .setDescription('trigger | AA | Survival | Budget')
        .setImage('https://i.imgur.com/6TBcYmK.png')
        message.channel.send(swiftsure);

    }    
}