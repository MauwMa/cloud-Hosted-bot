module.exports = {
    name: 'build-bismarck',
    description: 'build-bismarck',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const bismarck = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Bismarck Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AP | AP2 | HE | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1026899156700233899/Screenshot_2022-10-04-17-50-08.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(bismarck);

    }    
}