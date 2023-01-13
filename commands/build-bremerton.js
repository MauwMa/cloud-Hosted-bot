module.exports = {
    name: 'build-bremerton',
    description: 'build-bremerton',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const bremerton = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Bremerton Build')
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Tank | DPS | AA | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1026898052096725002/Screenshot_2022-10-04-17-31-36.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(bremerton);

    }    
}