module.exports = {
    name: 'nparancsok',
    description: 'nparancsok',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const nparancsok = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Parancsok')
        .setTimestamp()
        
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription(' /azurtalk | /felmeres | /ehes  | /ham | /ham2 | /karveg | /karban | /karerr1 | /karerr2 | /karerr | /karigaz | /keres | /tema | /torol x | /kuka | /update | /egyora | /egytiz | ')
        message.channel.send(nparancsok);

        if (message.deletable) message.delete();
    }    
}