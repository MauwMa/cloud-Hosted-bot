module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("⛨Háztető Ebédszünet⛨")
        .setURL('')
        .setTimestamp()
        .setDescription('Jaj nekem, már kész vagy a feladataiddal? Biztosan nem hagytad ki a munkát csak azért, hogy velünk egyél... Áh, sajnálom hogy kételkedni mertem benned. Rendben, gyerünk. Trento csak ránk vár.\n\nRN Trieste az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/J9Mdop3PzlvTQHXHBecRZ1oiqgQBbXKmSYgZmJg4sHI/https/pbs.twimg.com/media/FONoppUaQAQKdqs.jpg?width=914&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 