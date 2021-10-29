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
        .setDescription('Parancsnokok, köszönjük a támogatásaitokat, elértük 260k követőt twitteren. Helena META itt van, hogy együtt ünnepeljük. HQ 10db <:Kocka:790201634100740117> és 15.000 <:Pnz:790201580812894218> küld ki mindenkinek.')
        .setImage('https://images-ext-2.discordapp.net/external/tselL8Ic84Wza7tpxffLdCVtDXwOCWjk-Qzq0Fxy6nU/https/pbs.twimg.com/media/FC19b4lUUAA5hl-.jpg%3Alarge?width=987&height=555')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}