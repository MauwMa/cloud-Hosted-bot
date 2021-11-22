module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Akane Shinjo★')
        .setURL('')
        .setTimestamp()
        .setDescription('Hellóka, Akane Shinjo vagyok. Ez a felszerelés szuper menően néz ki, mintha egyből egy mechából jött volna ki. Mármost ha csak egy kaiju lenne itt valahol, akkor az lenne a legjobb...\n\nAkane Shinjo felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/7jeXl2HxUedah8TgtzZJVkW6nwrS1q2-qqEkn3n0baY/https/pbs.twimg.com/media/FEt3MVDakAM0uHS.jpg%3Alarge?width=1101&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}