module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Karbantartás vége")
        .setURL('')
        .setTimestamp()
        .setDescription("Parancsnokok,\n\nA vészhelyzeti karbantartás véget ért és mostmár minden szerver fut. Kompenzálásképp (5db <:Kocka:790201634100740117> és 5db High-Efficiency...) lett elküldve üzenetben. Elnézést kérünk a kellemetlenségért")
        .setImage('https://images-ext-2.discordapp.net/external/PGLOP1lyRoOuSu0_VOVLG4pDYnNQRtj_iBvYnSzdF30/https/pbs.twimg.com/media/FE21HPTVUAEzk36.jpg%3Alarge?width=965&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 