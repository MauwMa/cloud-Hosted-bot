module.exports = {
    name: 'build-tashkent',
    description: 'build-tashkent',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const tashkent = new Discord.MessageEmbed()
        .setColor('#bbbbbb')
        .setTitle('Tashkent Build')
        .setURL('')
        .setDescription('Survival | DPS | AA | Budget')
        .setImage('https://i.imgur.com/UrJ87TL.png')
        message.channel.send(tashkent);

    }    
}