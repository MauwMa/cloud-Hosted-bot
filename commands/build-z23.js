module.exports = {
    name: 'build-z23',
    description: 'build-z23',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const z23 = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Z23 Build')
        .setURL('')
        .setDescription('Balanced/ FP Meme/ Tank/ Budget')
        .setImage('https://i.imgur.com/Vo48OAj.png')
        message.channel.send(z23);

    }    
}