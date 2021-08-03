module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Memória Kinuhoz')
        .setURL('')
        .setDescription('Parancsnokok,\n\nA karbantartás után új memória lesz elérhető Kinuhoz.')
        .setImage('https://images-ext-2.discordapp.net/external/EeWMvXG3WglKKsZhXmUCl-wQIXbk4RXm3NmnIvPxvTI/https/pbs.twimg.com/media/E73ooiyWEAUC6vm.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}