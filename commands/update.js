module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Értesítés')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok\n\nA Facebook bejelentkező hiba meg lett oldva. Parancsnokok mostantól be fognak tudni jelentkezni a facebook felhasználójukkal. Kompenzálásként 3 High-Efficiency Combat Logistics Plan és 6db :kocka:-t osztunk ki. Köszönjük a türelmeteket.')
        .setImage('https://images-ext-1.discordapp.net/external/uqiaQAlKAye2JfpJWhzxjJmVdlStIR5jXbRvcyQqGcM/https/pbs.twimg.com/media/FCndsIOUcAMEyHO.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}