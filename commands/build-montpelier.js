module.exports = {
    name: 'build-montpelier',
    description: 'build-montpelier',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const montpelier = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('montpelier Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Tank(mob) | Tank(Boss) | Full AA | Budget')
        .setImage('https://i.imgur.com/PFnC7un.png')
        .setTimestamp()
        message.channel.send(montpelier);

    }    
}