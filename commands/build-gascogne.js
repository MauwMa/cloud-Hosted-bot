module.exports = {
    name: 'build-gascogne',
    description: 'build-gascogne',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const gascogne = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Gascogne Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('HE | AP | CASUAL | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1041802668223508631/Screenshot_2022-11-14-20-28-51.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(gascogne);

    }    
}