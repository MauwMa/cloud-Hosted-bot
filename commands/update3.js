module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('☭Volga☭')
        .setURL('')
        .setTimestamp()
        .setDescription('Nem nézel ki valami jól... Eszel te mostanában rendesen? És mi a helyzet az alvással? Hmm... Talán van valami köze az érzelmi stresszhez, vagy kapcsolati problémákkal? ...Oh. A nevem Volga, Northern Parliament Volgája. Óh jaj, tényleg elfelejtettem bemutatkozni egészen idáig?\n\nSN Volga felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/_l0Vsh7loA4iePWU9z31Jtd1XzPstZPbgvoNuXEeSWM/https/pbs.twimg.com/media/FMHQSWjUUAYW373.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}