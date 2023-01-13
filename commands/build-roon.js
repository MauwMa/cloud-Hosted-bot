module.exports = {
    name: 'build-roon',
    description: 'build-roon',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const roon = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Roon Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Reload | Tank | FP | Budget')
        .setImage('https://i.imgur.com/Tshg9y1.png')
        .setTimestamp()
        message.channel.send(roon);

    }    
}