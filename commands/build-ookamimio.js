module.exports = {
    name: 'build-ookamimio',
    description: 'build-ookamimio',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ookamimio = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ookami Mio Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Slow | DMG | AA | Budget')
        .setImage('https://i.imgur.com/Kn3QLeW.png')
        .setTimestamp()
        message.channel.send(ookamimio);

    }    
}