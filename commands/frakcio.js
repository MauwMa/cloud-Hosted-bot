module.exports = {
    name: 'frakcio',
    permissions: ["KICK_MEMBERS"],
    description: 'frakcio',
    execute (client, message, args, Discord){
        const frakcio = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Melyik frakció fleetet látnátok szíveszen fleet összeállításban Cicától nyaaa~?')
        .setURL('')
        .setDescription(':purple_circle:Sakura :blue_circle:Eagle :green_circle:Sardegna ')
        message.channel.send(frakcio);


if (message.deletable) message.delete();
    }    

}