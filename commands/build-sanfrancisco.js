module.exports = {
    name: 'build-sanfrancisco',
    description: 'build-sanfrancisco',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const sanfrancisco = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('San Francisco Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Balanced | FP(back) | Tank(front) | Budget')
        .setImage('https://i.imgur.com/nGzw59t.png')
        .setTimestamp()
        message.channel.send(sanfrancisco);

    }    
}