module.exports = {
    name: 'build-amagi',
    description: 'build-amagi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const amagi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Amagi Build')
        .setURL('')
        .setDescription('DMG | Preload | Balanced | Budget')
        .setImage('https://i.imgur.com/El4Jl98.png')
        .setTimestamp()
        message.channel.send(amagi);

    }    
}