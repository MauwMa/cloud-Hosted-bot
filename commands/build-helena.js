module.exports = {
    name: 'build-helena',
    description: 'build-helena',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const helena = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Helena Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Időzített | AP | HE | "Budget"')
        .setImage('https://i.imgur.com/itg8IwP.png')
        .setTimestamp()
        message.channel.send(helena);

    }    
}