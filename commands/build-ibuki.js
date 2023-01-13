module.exports = {
    name: 'build-ibuki',
    description: 'build-ibuki',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ibuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ibuki Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Survival | Damage | Yolo | "budget"')
        .setImage('https://i.imgur.com/6cYRkfX.png')
        .setTimestamp()
        message.channel.send(ibuki);

    }    
}