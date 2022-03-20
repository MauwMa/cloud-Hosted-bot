module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('⛨Trieste⛨')
        .setURL('')
        .setTimestamp()
        .setDescription(`Trieste vagyok, Trento-osztályú kettes számú nehéz cirkálója. A feladatom, hogy segítsek neked a munkádban. Most hát, abba tudnád hagyni a bámulást és visszamenni dolgozni?\n\nRN Trieste felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/zpjnlF0bSLJ23Da7BISi_yhVqbidUgR1RrBD9iJV5Kk/https/pbs.twimg.com/media/FONoWuQaAAADlft.jpg?width=939&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}