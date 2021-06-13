module.exports = {
    name: 'shirakamifubuki',
    description: 'shirakamifubuki',
    execute (message, args, Discord){
        const shirakamifubuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Shirakami Fubuki Build')
        .setURL('')
        .setDescription('FP/ Survival/ Full Meme/ Budget')
        .setImage('https://i.imgur.com/8cROTHy.png')
        message.channel.send(shirakamifubuki);

    }    
}