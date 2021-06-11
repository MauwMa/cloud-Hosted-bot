module.exports = {
    name: 'richelieu',
    description: 'richelieu',
    execute (message, args, Discord){
        const richelieu = new Discord.MessageEmbed()
        .setColor('#f5f9ff')
        .setTitle('Richelieu Build')
        .setURL('')
        .setDescription('Slot /HE /Survival /Budget')
        .setImage('https://i.imgur.com/LYy5afX.png')
        message.channel.send(richelieu);

    }    
}