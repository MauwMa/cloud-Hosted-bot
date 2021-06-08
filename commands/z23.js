module.exports = {
    name: 'z23',
    description: 'z23',
    execute (message, args, Discord){
        const z23 = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Z23 Build')
        .setURL('')
        .setDescription('Balanced/ FP Meme/ Tank/ Budget')
        .setImage('https://i.imgur.com/Vo48OAj.png')
        message.channel.send(z23);

    }    
}