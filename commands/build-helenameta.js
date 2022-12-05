module.exports = {
    name: 'build-helenameta',
    description: 'build-helenameta',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const helenameta = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Helena META Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('20s Scan | 15ss Scan | AA(20s) | Budget(15sec)')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1041803655587823698/Screenshot_2022-11-14-20-44-06.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(helenameta);

    }    
}