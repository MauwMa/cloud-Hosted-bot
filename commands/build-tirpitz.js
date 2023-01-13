module.exports = {
    name: 'build-tirpitz',
    description: 'build-tirpitz',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const tirpitz = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Tirpitz Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AP | HE | Tank | Budget')
        .setImage('https://i.imgur.com/GkRDIm0.png')
        .setTimestamp()
        message.channel.send(tirpitz);

    }    
}