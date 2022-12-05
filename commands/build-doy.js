module.exports = {
    name: 'build-doy',
    description: 'build-doy',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const doy = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Duke of York Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AP1 | AP2 | HE | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1026898366321393664/Screenshot_2022-10-04-17-41-39.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(doy);

    }    
}