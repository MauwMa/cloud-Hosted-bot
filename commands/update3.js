module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Aranyozott Sétány★')
        .setURL('')
        .setTimestamp()
        .setDescription('Te is jösz, Parancsnok? Ezesetben, legyünk egymás társasága, amíg nézzük a gingko levelek esését.\n\nMujina az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/_B6vVCbSTS_lrOwq6SDUzYANz582pNbX59Tc5ZcWOIA/https/pbs.twimg.com/media/FE30RXyVkAA3ccd.jpg%3Alarge?width=1239&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}