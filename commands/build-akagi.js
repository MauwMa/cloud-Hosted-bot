module.exports = {
    name: 'build-akagi',
    description: 'build-akagi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const akagi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Akagi Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Brrr | Mobing | AA | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023179565775999006/Screenshot_2022-09-24-10-51-51.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(akagi);

    }    
}