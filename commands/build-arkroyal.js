module.exports = {
    name: 'build-arkroyal',
    description: 'build-arkroyal',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const arkroyal = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Ark Royal Build')
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Full dmg | Gyors(abb) dmg | Mob | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023180509754433576/Screenshot_2022-09-24-11-05-35.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(arkroyal);

    }    
}