module.exports = {
    name: 'build-mainz',
    description: 'build-mainz',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const mainz = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Mainz Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Tank(front) | DPS(Back) | Helena Fight | Budget')
        .setImage('https://i.imgur.com/ldFXtiU.png')
        .setTimestamp()
        message.channel.send(mainz);

    }    
}