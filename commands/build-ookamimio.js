module.exports = {
    name: 'build-ookamimio',
    description: 'build-ookamimio',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ookamimio = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ookami Mio Build')
        .setURL('')
        .setDescription('Slow | DMG | AA | Budget')
        .setImage('https://i.imgur.com/Kn3QLeW.png')
        message.channel.send(ookamimio);

    }    
}