module.exports = {
    name: 'build-gascogneu',
    description: 'build-gascogneu',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const gascogneu = new Discord.MessageEmbed()
        .setColor('WHITE')
        .setTitle('Gascogne U Build')
        .setURL('')
        .setDescription('? | ? | ? | Budget')
        .setImage('https://i.imgur.com/NOveReP.png')
        .setTimestamp()
        message.channel.send(gascogneu);

    }    
}