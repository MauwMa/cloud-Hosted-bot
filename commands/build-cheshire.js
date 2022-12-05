module.exports = {
    name: 'build-cheshire',
    description: 'build-cheshire',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const cheshire = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Cheshire Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Tank | DPS | AA | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1026898228773392454/Screenshot_2022-10-04-17-35-24.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(cheshire);

    }    
}