module.exports = {
    name: 'felszer',
    description: 'felszer',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const felszer = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Felszerelés Útmutatók')
        .setURL('')
        .setDescription('')
        .setTimestamp()
        .addFields(
            {name: 'Battleship útmutatók', value: ':small_blue_diamond: Főfegyver: /felszer-bbmain'},
        )
        message.channel.send(felszer);

    }    
}