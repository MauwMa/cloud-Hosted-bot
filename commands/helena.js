module.exports = {
    name: 'helena',
    description: 'helena',
    execute (message, args, Discord){
        const helena = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Helena Build')
        .setURL('')
        .setDescription('Időzített/ AP/ HE/ "Budget"')
        .setImage('https://i.imgur.com/itg8IwP.png')
        message.channel.send(helena);

    }    
}