module.exports = {
    name: 'build-lemalin',
    description: 'build-lemalin',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const lemalin = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Le Malin Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('dmg | Auto1 | Auto2 | Budget')
        .setImage('https://i.imgur.com/e91pLxE.png')
        .setTimestamp()
        message.channel.send(lemalin);

    }    
}