module.exports = {
    name: 'southdakota',
    description: 'southdakota',
    execute (client, message, args, Discord){
        const southdakota = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('South Dakota Build')
        .setURL('')
        .setDescription('Support BB/ AP/ HE/ budget')
        .setImage('https://i.imgur.com/0fmBz4X.png')
        message.channel.send(southdakota);

    }    
}