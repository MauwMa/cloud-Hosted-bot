module.exports = {
    name: 'nagato',
    description: 'opsiren',
    execute (message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Nagato build')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: 'https://media.discordapp.net/attachments/789936506193182740/851162493878403162/Screenshot_2021-06-06-19-14-37.png?width=1112&height=626'},
        )
        message.channel.send(newEmbed);

    }    
}