module.exports = {
    name: 'build-ibuki',
    description: 'build-ibuki',
    execute (client, message, args, Discord){
        const ibuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ibuki Build')
        .setURL('')
        .setDescription('Survival/ Damage/ Yolo/ "budget"')
        .setImage('https://i.imgur.com/6cYRkfX.png')
        message.channel.send(ibuki);

    }    
}