module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Katsuragi❀')
        .setURL('')
        .setDescription('Hellóka, Parancsnok! Unryuu-osztályú repülőgép hordozó vagyok, Katsuragi. Nem csak hordozó vagyok, hanem teljes értékű repülőgép hordozó, ami azt jelenti, hogy mindent tudok csinálni, amire egy repülőgép hordozó képes megtenni! Nem mondom el miket nem szeretek, viszont rengeteg hobbim van~ Például~ (1 perccel később) ...Szóval jah! Héj, Parancsnok, még mindig figyelsz?\n\nIJN Katsuragi felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/Zgp-YM2OnAOKpgtHqNOLLsIVvZ-AI8m0Xtga-DUMEl4/https/pbs.twimg.com/media/E_KEzsdVgAksCJ8.jpg%3Alarge?width=1032&height=540')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}