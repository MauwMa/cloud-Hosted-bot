module.exports = {
    name: 'sanfrancisco',
    description: 'sanfrancisco',
    execute (message, args, Discord){
        const sanfrancisco = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('San Francisco Build')
        .setURL('')
        .setDescription('Balanced/ FP(back)/ Tank(front)/ Budget')
        .setImage('https://i.imgur.com/nGzw59t.png')
        message.channel.send(sanfrancisco);

    }    
}