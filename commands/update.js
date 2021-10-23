module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Tranquil Sunya❀')
        .setURL('')
        .setTimestamp()
        .setDescription('Örülök hogy visszatértél, Uram. Megváltoztattam a viseletemet annak érdekében, hogy jobban véghez tudjam vinni a parancs– hogy "együtt pihenjünk". Most hát... meg tudnád mutatni, hogy hogyan folytassam tovább?\n\nIJN Ibuki az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/xl0I1lds7DxgKfTbPN1MQRsj-M9bSJdq9NbnB9jVmmw/https/pbs.twimg.com/media/FCXk1gVVgAAsfTt.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}