module.exports = {
    name: 'build-sovetskaya',
    permissions: ["SEND_MESSAGES"],
    description: 'build-sovetskaya',
    execute (client, message, args, Discord){
        const sovetskaya = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('sovetskaya Build')
        .setURL('')
        .setDescription('CH13 | AP | HE | budget')
        .setImage('https://i.imgur.com/JgNg5Dt.png')
        message.channel.send(sovetskaya);

    }    
}