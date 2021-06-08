module.exports = {
    name: 'atago',
    description: 'atago',
    execute (message, args, Discord){
        const atago = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Atago Build')
        .setURL('')
        .setDescription('Ideal?/ Auto/ Manual/ Budget')
        .setImage('https://i.imgur.com/YMF2PQk.png')
        message.channel.send(atago);

    }    
}