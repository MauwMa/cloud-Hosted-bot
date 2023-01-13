module.exports = {
    name: 'build-kinggeorge',
    description: 'build-kinggeorge',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kinggeorge = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('King George V Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AP | Helena fight | Preload(arm opt) | Budget')
        .setImage('https://i.imgur.com/EXBaHRd.png')
        .setTimestamp()
        message.channel.send(kinggeorge);

    }    
}