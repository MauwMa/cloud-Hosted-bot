module.exports = {
    name: 'build-hood',
    description: 'build-hood',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const hood = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Hood Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Late game | Reload | General | Budget')
        .setImage('https://i.imgur.com/i3CjdZ8.png')
        .setTimestamp()
        message.channel.send(hood);

    }    
}