module.exports = {
    name: 'build-algerie',
    description: 'build-algerie',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const algerie = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Algérie Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Tank? | HE dmg | AP dmg | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1023180205084389406/Screenshot_2022-09-24-10-59-33.png?width=1156&height=650')
        .setTimestamp()
        message.channel.send(algerie);

    }    
}