module.exports = {
    name: 'build-azuma',
    description: 'build-azuma',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const azuma = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Azuma Build')
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Fate5 Hybrid | Fate5 Tank | Fate5 Dmg | BNon Fate5 or Vs Light armor')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023181676542705745/Screenshot_2022-09-24-11-22-40.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(azuma);

    }    
}