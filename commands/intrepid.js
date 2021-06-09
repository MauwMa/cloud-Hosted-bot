module.exports = {
    name: 'intrepid',
    description: 'intrepid',
    execute (message, args, Discord){
        const intre = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Intrepid Build')
        .setURL('')
        .setDescription('AA/Boss/Mob/Budget')
        .setImage('https://i.imgur.com/Ec7l8KP.png')
        message.channel.send(intre);

    }    
}