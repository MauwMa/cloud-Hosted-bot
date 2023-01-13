module.exports = {
    name: 'build-aquila',
    description: 'build-aquila',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const aquila = new Discord.MessageEmbed()
        .setColor('#065535')
        .setTitle('Aquila Build')
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Mob | Boss | Heal | budget')
        .setImage('https://i.imgur.com/OwH1SZo.png')
        .setTimestamp()
        message.channel.send(aquila);

    }    
}