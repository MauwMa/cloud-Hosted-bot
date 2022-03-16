module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("★Ördög a Szomszéd★")
        .setURL('')
        .setTimestamp()
        .setDescription('Ezt nézd meg - egymás mellé ültünk az órán. Már előre várom, hogy mit fogunk csinálni "tanóránkívüli tevékenységként" együtt. Hehehe~\n\nUSS Archerfish az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/N9cyz3dfoRN4D4WxDSnP9hxMz48yJ6UqHMqaymn4Fls/https/pbs.twimg.com/media/FN4KoZWaUAAE-A5.jpg?width=914&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 