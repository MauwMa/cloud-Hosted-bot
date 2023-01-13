module.exports = {
    name: 'build-ranger',
    description: 'build-ranger',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ranger = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Ranger Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Slow | Boss | Mob | Budget')
        .setImage('https://i.imgur.com/85u643r.png')
        .setTimestamp()
        message.channel.send(ranger);

    }    
}