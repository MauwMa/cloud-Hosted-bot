module.exports = {
    name: 'felszer',
    description: 'felszer',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c30000')
        .setTitle('Felszerelés Útmutatók')
        .setURL('')
        .setDescription('')
        .setTimestamp()
        .addFields(
            {name: 'Battleship Main Gun út mutató', value: ':small_blue_diamond: /felszer-bbmain'},
        )
        message.channel.send(newEmbed);

    }    
}