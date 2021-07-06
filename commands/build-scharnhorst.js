module.exports = {
    name: 'build-scharnhorst',
    description: 'build-scharnhorst',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const scharnhorst = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Scharnhorst Build')
        .setURL('')
        .setDescription('Reload | AP | HE | Budget')
        .setImage('https://i.imgur.com/IyQdfeF.png')
        message.channel.send(scharnhorst);

    }    
}