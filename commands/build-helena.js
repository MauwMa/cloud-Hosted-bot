module.exports = {
    name: 'build-helena',
    description: 'build-helena',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const helena = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Helena Build')
        .setURL('')
        .setDescription('Időzített/ AP/ HE/ "Budget"')
        .setImage('https://i.imgur.com/itg8IwP.png')
        message.channel.send(helena);

    }    
}