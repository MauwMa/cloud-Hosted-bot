module.exports = {
    name: 'build-odin',
    description: 'build-odin',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const Odin = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Odin Build')
        .setURL('')
        .setDescription('CH13/ HE/ AP/ Budget')
        .setImage('https://i.imgur.com/PdymKIn.png')
        message.channel.send(Odin);

    }    
}