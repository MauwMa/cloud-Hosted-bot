module.exports = {
    name: 'build-sovetskaya',
    permissions: ["SEND_MESSAGES"],
    description: 'build-sovetskaya',
    execute (client, message, args, Discord){
        const sovetskaya = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('sovetskaya Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('CH13 | AP | HE | budget')
        .setImage('https://i.imgur.com/JgNg5Dt.png')
        .setTimestamp()
        message.channel.send(sovetskaya);

    }    
}