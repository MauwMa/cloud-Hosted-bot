module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⚜Maillé Brézé⚜')
        .setURL('')
        .setTimestamp()
        .setDescription('Maillé Brézé romboló, Iris Libre Tomplomos Lovagja megérkezett! Hé te, paraszt, te ki mélyen alszik tudva, hogy én védem eme földeket! ...Mi? T-Te vagy a Parancsnokúr? B-B-Bocsásd meg a tiszteletlenségemet! \n\nFFNF Maillé Brézé felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/L8w97NVO3r-jMeX5wHRRhkTRft9DOYYoVJ4G0kzJrTg/https/pbs.twimg.com/media/FCYkkuBVIAUuJ1y.jpg%3Alarge?width=1739&height=910')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}