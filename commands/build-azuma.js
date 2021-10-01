module.exports = {
    name: 'build-azuma',
    description: 'build-azuma',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const azuma = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Azuma Build')
        .setURL('')
        .setDescription('Best in slot | Good | Meme? | Budget')
        .setImage('https://i.imgur.com/Jq8GHk7.png')
        .setTimestamp()
        message.channel.send(azuma);

    }    
}