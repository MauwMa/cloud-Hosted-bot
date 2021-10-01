module.exports = {
    name: 'build-akashi',
    description: 'build-akashi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const akashi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Akashi Build')
        .setURL('')
        .setDescription('AA | Anti Ambush | Hybrid | Badget(normal?)')
        .setImage('https://i.imgur.com/c57HBD6.png')
        .setTimestamp()
        message.channel.send(akashi);

    }    
}