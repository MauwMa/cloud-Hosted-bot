module.exports = {
    name: 'build-alabama',
    description: 'build-alabama',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const alabama = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Alabama Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('SAP | AP | HE | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023179712962494514/Screenshot_2022-09-24-10-56-10.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(alabama);

    }    
}