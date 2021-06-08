module.exports = {
    name: 'howe',
    description: 'howe',
    execute (message, args, Discord){
        const howe = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Höwe Build')
        .setURL('')
        .setDescription('HE/ AP/ AP(long battles)/ Budget')
        .setImage('https://i.imgur.com/Z95z2nl.png')
        message.channel.send(howe);

    }    
}