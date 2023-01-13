module.exports = {
    name: 'build-gascogneu',
    description: 'build-gascogneu',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const gascogneu = new Discord.MessageEmbed()
        .setColor('WHITE')
        .setTitle('Gascogne U Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('? | ? | ? | Budget')
        .setImage('https://i.imgur.com/NOveReP.png')
        .setTimestamp()
        message.channel.send(gascogneu);

    }    
}