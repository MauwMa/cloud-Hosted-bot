module.exports = {
    name: 'build-atago',
    description: 'build-atago',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const atago = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Atago Build')
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Hybrid | Tank | Torp dmg | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023180897777885214/Screenshot_2022-09-24-11-10-57.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(atago);

    }    
}