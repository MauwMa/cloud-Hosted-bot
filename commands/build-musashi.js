module.exports = {
    name: 'build-musashi',
    description: 'build-musashi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const musashi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Musashi Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Brrr | Helena A | Helena B | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023178167088844800/Screenshot_2022-09-24-10-40-23.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(musashi);

    }    
}