module.exports = {
    name: 'build-helenameta',
    description: 'build-helenameta',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const helenameta = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Helena META Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('20sec | 15sec | ? | Budget')
        .setImage('https://i.imgur.com/jIPtTnp.png')
        .setTimestamp()
        message.channel.send(helenameta);

    }    
}