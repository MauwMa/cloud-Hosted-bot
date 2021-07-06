module.exports = {
    name: 'build-independence',
    description: 'build-independence',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const independence = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Independence Build')
        .setURL('')
        .setDescription('Best | Good | Okay | Budget')
        .setImage('https://i.imgur.com/Ni8nXLS.png')
        message.channel.send(independence);

    }    
}