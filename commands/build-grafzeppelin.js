module.exports = {
    name: 'build-grafzeppelin',
    description: 'build-grafzeppelin',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const grafzeppelin = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Graf Zeppelin Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('BOSS | MOB | AA | Budget')
        .setImage('https://i.imgur.com/fZr99zz.png')
        .setTimestamp()
        message.channel.send(grafzeppelin);

    }    
}