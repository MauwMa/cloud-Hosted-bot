module.exports = {
    name: 'build-odin',
    description: 'build-odin',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const Odin = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Odin Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('CH13 | HE | AP | Budget')
        .setImage('https://i.imgur.com/PdymKIn.png')
        .setTimestamp()
        message.channel.send(Odin);

    }    
}