module.exports = {
    name: 'build-intrepid',
    description: 'build-intrepid',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const intre = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Intrepid Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AA | Boss | Mob | Budget')
        .setImage('https://i.imgur.com/Ec7l8KP.png')
        .setTimestamp()
        message.channel.send(intre);

    }    
}