module.exports = {
    name: 'build-helena',
    description: 'build-helena',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const helena = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Helena Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AA? | 16S Radar | 20s Radar | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1041803296144363530/Screenshot_2022-11-14-20-39-08.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(helena);

    }    
}