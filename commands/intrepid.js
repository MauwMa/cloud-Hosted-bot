module.exports = {
    name: 'intrepid',
    description: 'intrepid',
    execute (message, args, Discord){
        const intre = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Intrepid Build')
        .setURL('')
        .setDescription('AA/Boss/Mob/Budget')
        .setImage('https://imgur.com/Ec7l8KP')
        message.channel.send(intre);

    }    
}