module.exports = {
    name: 'build-formidable',
    description: 'build-formidable',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const formidable = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Formidable Build')
        .setURL('')
        .setDescription('Boss+timing | Boss | Mob | Budget')
        .setImage('https://i.imgur.com/Gc61HYP.png')
        .setTimestamp()
        message.channel.send(formidable);

    }    
}