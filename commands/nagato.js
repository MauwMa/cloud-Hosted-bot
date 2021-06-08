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
            {name: 'Operation Sirenhez útmutatók és egyéb segítségre szolgaló dolgok', value: ':small_blue_diamond:[Operation Siren Corrosin 7 útmutató](http://shorturl.at/lBFL8) by Cica'},
        )
        .setImage('https://pbs.twimg.com/media/Ev8p-p1UYAIacwP.jpg')
        message.channel.send(valami);

    }    
}