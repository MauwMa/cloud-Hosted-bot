module.exports = {
    name: 'build-ryuuhou2',
    description: 'build-ryuuhou2',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ryuuhou2 = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ryuuhou Build')
        .setURL('')
        .setDescription('1.: szöveg \n2.: szöveg \n3.: szöveg\n4.: szöveg')
        .setImage('https://i.imgur.com/Q4ux5qf.png')
        .setTimestamp()
        message.channel.send(ryuuhou2);

    }    
}