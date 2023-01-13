module.exports = {
    name: 'build-shirakamifubuki',
    description: 'build-shirakamifubuki',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const shirakamifubuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Shirakami Fubuki Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('FP | Survival | Full Meme | Budget')
        .setImage('https://i.imgur.com/8cROTHy.png')
        .setTimestamp()
        message.channel.send(shirakamifubuki);

    }    
}