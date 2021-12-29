module.exports = {
    name: 'build-azuma',
    description: 'build-azuma',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const azuma = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Azuma Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Best in slot | Good | Meme? | Budget')
        .setImage('https://i.imgur.com/Jq8GHk7.png')
        .setTimestamp()
        message.channel.send(azuma);

    }    
}