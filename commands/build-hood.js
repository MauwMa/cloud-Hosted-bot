module.exports = {
    name: 'build-hood',
    description: 'build-hood',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const hood = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Hood Build')
        .setURL('')
        .setDescription('Late game | Reload | General | Budget')
        .setImage('https://i.imgur.com/i3CjdZ8.png')
        message.channel.send(hood);

    }    
}