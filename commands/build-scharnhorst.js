module.exports = {
    name: 'build-scharnhorst',
    description: 'build-scharnhorst',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const scharnhorst = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Scharnhorst Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Reload | AP | HE | Budget')
        .setImage('https://i.imgur.com/IyQdfeF.png')
        .setTimestamp()
        message.channel.send(scharnhorst);

    }    
}