module.exports = {
    name: 'ibuki',
    description: 'ibuki',
    execute (message, args, Discord){
        const ibuki = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ibuki Build')
        .setURL('')
        .setDescription('Survival/ Damage/ Yolo/ "budget"')
        .setImage('https://i.imgur.com/6cYRkfX.png')
        message.channel.send(ibuki);

    }    
}