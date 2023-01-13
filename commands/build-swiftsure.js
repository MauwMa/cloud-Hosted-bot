module.exports = {
    name: 'build-swiftsure',
    description: 'build-swiftsure',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const swiftsure = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Swiftsure Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('trigger | AA | Survival | Budget')
        .setImage('https://i.imgur.com/6TBcYmK.png')
        .setTimestamp()
        message.channel.send(swiftsure);

    }    
}