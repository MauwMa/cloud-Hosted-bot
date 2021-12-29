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
        .setDescription('AP | HE | HE | Budget')
        .setImage('https://i.imgur.com/snlA47o.png')
        .setTimestamp()
        message.channel.send(algerie);

    }    
}