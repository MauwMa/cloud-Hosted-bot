    module.exports = {
    name: 'build-fdg',
    description: 'build-fdg',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const fdg = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Friedrich der Große Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('FAST | CASUAL | HELENA | ????')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1041802525684285571/Screenshot_2022-11-14-20-24-09.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(fdg);

    }    
}