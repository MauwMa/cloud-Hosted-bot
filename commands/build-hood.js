module.exports = {
    name: 'build-hood',
    description: 'build-hood',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const hood = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Hood Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Brr(meme) | AP | HE | Budget')
        .setImage('https://media.discordapp.net/attachments/791956226521956394/1041803850438426724/Screenshot_2022-11-14-20-49-04.png?width=1193&height=671')
        .setTimestamp()
        message.channel.send(hood);

    }    
}