module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Weiss Uhrzeiger✠')
        .setURL('')
        .setDescription('Már úgy is tudod, nem igaz? Mivel olyan sok időt töltöttem azzal, hogy ilyen ruhába öltözzek a kedvedért... Heh, viszonozásképp rengeteg idődet fogom elvenni. Hehehe.\n\nKMS Peter Strasser új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/ARdU45Wxrxiv8w0ckA04IOflfCo6fcB3Wll-ILYMarY/https/pbs.twimg.com/media/E_zeNiTVkAYHomV.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}