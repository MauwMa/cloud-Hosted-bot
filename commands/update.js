module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("【2021 Popularity Poll Finals】")
        .setURL('')
        .setTimestamp()
        .setDescription("Jelenleg a 2021 Népszerűség Szavazás Utolsó Fordulója zajlik! Hogy megünnepeljük ezt a különleges alkalmat, HQ ajándékkal készült~ Ne felejtsetek szavazni a kedvenc shipgirlötökre az event végéig December 24. Magyar ideőszámítás szerint 7:59-ig.")
        .setImage('https://images-ext-2.discordapp.net/external/SNIZJCWoNyWMEQzi1gDyTfvqGJsMQeQB4QP0KpGHi1Q/https/pbs.twimg.com/media/FHIzEu6UYAM25h0.jpg%3Alarge?width=1005&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 