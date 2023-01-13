module.exports = {
    name: 'build-seattle',
    description: 'build-seattle',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const seattle = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Seattle Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('DPS | AA | Balanced | Budget')
        .setImage('https://i.imgur.com/qAAGpmZ.png')
        .setTimestamp()
        message.channel.send(seattle);

    }    
}