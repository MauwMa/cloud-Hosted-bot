module.exports = {
    name: 'montpelier',
    description: 'montpelier',
    execute (client, message, args, Discord){
        const montpelier = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('montpelier Build')
        .setURL('')
        .setDescription('Tank(mob)/ Tank(Boss)/ Full AA/ Budget')
        .setImage('https://i.imgur.com/PFnC7un.png')
        message.channel.send(montpelier);

    }    
}