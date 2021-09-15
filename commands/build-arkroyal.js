module.exports = {
    name: 'build-arkroyal',
    description: 'build-arkroyal',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const arkroyal = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Ark Royal Build')
        .setURL('')
        .setDescription('Boss | Mob | ? | Budget')
        .setImage('https://i.imgur.com/BVDsdCb.png')
        message.channel.send(arkroyal);

    }    
}