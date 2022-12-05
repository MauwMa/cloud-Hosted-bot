module.exports = {
    name: 'build-grafzeppelin',
    description: 'build-grafzeppelin',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const grafzeppelin = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Graf Zeppelin Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AA | BOSS | MOB | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1041802856212222072/Screenshot_2022-11-14-20-31-29.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(grafzeppelin);

    }    
}