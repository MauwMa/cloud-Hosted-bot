module.exports = {
    name: 'build-agir',
    description: 'build-agir',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const agir = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Agir Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('General | Slow&Dmg | FullEva | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023179230613348393/Screenshot_2022-09-24-10-45-28.png?width=1156&height=650')
        .setTimestamp()

        message.channel.send(agir);

    }    
}