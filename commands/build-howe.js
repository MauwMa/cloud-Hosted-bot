module.exports = {
    name: 'howe',
    description: 'howe',
    execute (client, message, args, Discord){
        const howe = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Höwe Build')
        .setURL('')
        .setDescription('HE/ AP/ AP(long battles)/ Budget')
        .setImage('https://i.imgur.com/Z95z2nl.png')
        message.channel.send(howe);

    }    
}