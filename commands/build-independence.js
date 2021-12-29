module.exports = {
    name: 'build-independence',
    description: 'build-independence',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const independence = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Independence Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Best | Good | Okay | Budget')
        .setImage('https://i.imgur.com/Ni8nXLS.png')
        .setTimestamp()
        message.channel.send(independence);

    }    
}