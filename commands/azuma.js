module.exports = {
    name: 'azuma',
    description: 'azuma',
    execute (message, args, Discord){
        const azuma = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Azuma Build')
        .setURL('')
        .setDescription('Best in slot/ Good/ Meme?/ Budget')
        .setImage('https://i.imgur.com/Jq8GHk7.png')
        message.channel.send(azuma);

    }    
}