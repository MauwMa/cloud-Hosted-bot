module.exports = {
    name: 'build-heinrich',
    description: 'build-heinrich',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const heinrich = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Prinz Heinrich Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Balanced | DMG | Tank | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1041803008113119312/Screenshot_2022-11-14-20-35-31.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(heinrich);

    }    
}