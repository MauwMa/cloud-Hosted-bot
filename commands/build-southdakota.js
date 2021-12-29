module.exports = {
    name: 'build-southdakota',
    permissions: ["SEND_MESSAGES"],
    description: 'build-southdakota',
    execute (client, message, args, Discord){
        const southdakota = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('South Dakota Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Support BB | AP | HE | budget')
        .setImage('https://i.imgur.com/0fmBz4X.png')
        .setTimestamp()
        message.channel.send(southdakota);

    }    
}