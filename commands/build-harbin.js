module.exports = {
    name: 'build-harbin',
    description: 'build-harbin',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const harbin = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Harbin Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Tank | Heavy Boss | Mob | Light Boss')
        .setImage('https://media.discordapp.net/attachments/789936506193182740/1034425914844516395/Screenshot_2022-10-25-12-17-57.png')
        .setTimestamp()
        message.channel.send(harbin);

    }    
}