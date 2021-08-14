module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnok,\n\nElérhető új Memory Hornetre. Volt már szerencséd, hogy megtapasztald a történetét?')
        .setImage('https://images-ext-1.discordapp.net/external/_9maNRx3TeMCVoX2U0B-NSy6QOCzyBe1E2rm9ylc1n8/https/pbs.twimg.com/media/E8qku8-VkAAAgJP.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}