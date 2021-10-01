module.exports = {
    name: 'build-kent',
    description: 'build-kent',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kent = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Kentaki Build')
        .setURL('')
        .setDescription('WHY | WOULD | YOU USE | Kent?')
        .setImage('https://i.imgur.com/1YHbrta.png')
        .setTimestamp()
        message.channel.send(kent);

    }    
}