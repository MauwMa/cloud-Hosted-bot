module.exports = {
    name: 'build-sanfrancisco',
    description: 'build-sanfrancisco',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const sanfrancisco = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('San Francisco Build')
        .setURL('')
        .setDescription('Balanced | FP(back) | Tank(front) | Budget')
        .setImage('https://i.imgur.com/nGzw59t.png')
        .setTimestamp()
        message.channel.send(sanfrancisco);

    }    
}