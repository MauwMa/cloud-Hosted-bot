module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("★A Cicás Meglepetés!★")
        .setURL('')
        .setTimestamp()
        .setDescription("Meglepetééééés! Egész végig a dobozban voltam! ...Ennyire sikerült meglepnem téged? Heeheee~ Tessék, itt egy utalvány bocsánatkérésképp. Gyere nézz be később és használd el~♪\n\nUSS Albacore új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok..")
        .setImage('https://images-ext-1.discordapp.net/external/k0HtQ_ZhBqU2F9d5w3SELw1ogR1hZlbXBlE-EsKm1wU/https/pbs.twimg.com/media/FHnFcVZVUAAQdno.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 