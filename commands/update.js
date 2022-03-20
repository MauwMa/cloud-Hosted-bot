module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("⛨Pilledt Könyvtáros⛨")
        .setURL('')
        .setTimestamp()
        .setDescription('Úgy tűnik az iskolai egyenruhák hypolva vannak. Veneto ezt választotta nekem. Te minek öltöztél, Parancsnok? Tanárnak? Iskolatársnak?\n\nRN Impero az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/BfWynqkAJwNcmU_iDV0f3bKZtcdFXp5LK2ebNmwjlQU/https/pbs.twimg.com/media/FOIg31UakAMU1kK.jpg?width=914&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 