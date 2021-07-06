module.exports = {
    name: 'build-ranger',
    description: 'build-ranger',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ranger = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Ranger Build')
        .setURL('')
        .setDescription('Slow | Boss | Mob | Budget')
        .setImage('https://i.imgur.com/85u643r.png')
        message.channel.send(ranger);

    }    
}