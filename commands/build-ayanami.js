module.exports = {
    name: 'build-ayanami',
    description: 'build-ayanami',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ayanami = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ayanami Build')
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Survival | Manual | Hybrid | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023181247578652702/Screenshot_2022-09-24-11-16-51.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(ayanami);

    }    
}