module.exports = {
    name: 'frakcio',
    permissions: ["KICK_MEMBERS"],
    description: 'frakcio',
    execute (client, message, args, Discord){
        const frakcio = new Discord.MessageEmbed()
        .setColor('WHITE')
        .setTitle('Melyik frakció fleetet látnátok szíveszen fleet összeállításban Cicától nyaaa~?')
        .setURL('')
        .setDescription(':purple_circle:=>Sakura | :blue_circle:=>Eagle | :green_circle:=>Sardegna | :white_circle:=>Orosz/Kína\n\n:yellow_circle:=>Royal | :orange_circle:=>Vichy/Iris | :red_circle:=>Iron | :brown_circle:=>Egyéb')
        message.channel.send(frakcio);


if (message.deletable) message.delete();
    }    

}