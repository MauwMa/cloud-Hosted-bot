module.exports = {
    name: 'build-nagato',
    description: 'build-nagato',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const valami = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Nagato Build')
        .setURL('')
        .setDescription('AP | Fast | HE | Budget')
        .setImage('https://media.discordapp.net/attachments/789936506193182740/851162493878403162/Screenshot_2021-06-06-19-14-37.png?width=1112&height=626')
        message.channel.send(valami);

    }    
}