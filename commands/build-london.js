module.exports = {
    name: 'build-london',
    description: 'build-london',
    execute (client, message, args, Discord){
        const london = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('London Build')
        .setURL('')
        .setDescription('HE/ AP/ Helena fight/ Budget')
        .setImage('https://i.imgur.com/xrfb7jr.png')
        message.channel.send(london);

    }    
}