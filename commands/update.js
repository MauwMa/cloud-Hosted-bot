module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Hold nézés 29½.-én★')
        .setURL('')
        .setDescription('Az éves hold nézés fesztivál megint jön~ Áh, szóval tudsz ezt-azt a Közép-Őszi Fesztiválról, Parancsnok? Akkor számítok rá, hogy tudod mit fogunk csinálni az este, rendben~?♡\n\nUSS Marblehead új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/iqmM9Q1OEY3TKcH-kwci-bOTHM9fZozAAy0_UWmFGEQ/https/pbs.twimg.com/media/E_VlTGwUcAEErga.jpg%3Alarge?width=1316&height=658')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}