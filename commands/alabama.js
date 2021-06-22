module.exports = {
    name: 'alabama',
    description: 'alabama',
    execute (client, message, args, Discord){
        const alabama = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Alabama Build')
        .setURL('')
        .setDescription('Best in Slot?/ AP/ HE+timing/ budget')
        .setImage('https://i.imgur.com/rZ6qN6j.png')
        message.channel.send(alabama);

    }    
}