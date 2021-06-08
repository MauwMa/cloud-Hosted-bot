module.exports = {
    name: 'nagato',
    description: 'nagato',
    execute (message, args, Discord){
        const valami = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Operation Siren Útmutatók')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: '', value: ''},
        )
        .setImage('https://pbs.twimg.com/media/Ev8p-p1UYAIacwP.jpg')
        message.channel.send(valami);

    }    
}