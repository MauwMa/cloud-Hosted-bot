module.exports = {
    name: 'build-formidable',
    description: 'build-formidable',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const formidable = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Formidable Build')
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Boss | Mob | W13(Mob) | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1026898525017079838/Screenshot_2022-10-04-17-44-35.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(formidable);

    }    
}