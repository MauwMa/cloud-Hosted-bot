module.exports = {
    name: 'build-ryuuhou',
    description: 'build-ryuuhou',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ryuuhou = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ryuuhou Build')
        .setURL('')
        .setDescription('Dmg | Support(Slow) | Heal | budget')
        .setImage('https://i.imgur.com/Q4ux5qf.png')
        message.channel.send(ryuuhou);

    }    
}