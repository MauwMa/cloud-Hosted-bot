module.exports = {
    name: 'build-perseus',
    description: 'build-perseus',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const perseus = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Perseus Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Burst" | Fast reload | AA | Budget')
        .setImage('https://i.imgur.com/t3rvQuK.png')
        .setTimestamp()
        message.channel.send(perseus);

    }    
}