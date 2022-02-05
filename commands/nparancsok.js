module.exports = {
    name: 'nparancsok',
    description: 'nparancsok',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const nparancsok = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Parancsok')
        .setTimestamp()
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('/egyora | /felmeres | /ehes | /frakcio | /ham | /ham2 | /karveg | /karban | /karerr1 | /karerr2 | /karerr | /keres | /tema | /kuka | /update | /egyora |')
        message.channel.send(nparancsok);

        if (message.deletable) message.delete();
    }    
}