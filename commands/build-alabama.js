module.exports = {
    name: 'build-alabama',
    description: 'build-alabama',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const alabama = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Alabama Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Best in Slot? | AP | HE+timing | budget')
        .setImage('https://i.imgur.com/rZ6qN6j.png')
        .setTimestamp()
        message.channel.send(alabama);

    }    
}