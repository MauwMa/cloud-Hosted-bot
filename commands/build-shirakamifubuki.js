module.exports = {
    name: 'build-shirakamifubuki',
    description: 'build-shirakamifubuki',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const shirakamifubuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Shirakami Fubuki Build')
        .setURL('')
        .setDescription('FP | Survival | Full Meme | Budget')
        .setImage('https://i.imgur.com/8cROTHy.png')
        .setTimestamp()
        message.channel.send(shirakamifubuki);

    }    
}