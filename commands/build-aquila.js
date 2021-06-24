module.exports = {
    name: 'build-aquila',
    description: 'build-aquila',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const aquila = new Discord.MessageEmbed()
        .setColor('#065535')
        .setTitle('Aquila Build')
        .setURL('')
        .setDescription('Mob/ Boss/ Heal/ budget')
        .setImage('https://i.imgur.com/OwH1SZo.png')
        message.channel.send(aquila);

    }    
}