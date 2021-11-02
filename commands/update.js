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
        .setDescription('Parancsnokok,\n\nHQ egy hotfixet adott ki, amelyben Le Terrible hangot kapott és az Operation Sirenben a <:Pnz:790201580812894218> vásárlását 3x-ról 10x-re növelte. Emellett, HQ 2000 "Supply Shop Voucher"-t küld minden Parancsnoknak a November 11. karbantartás után.')
        .setImage('https://images-ext-2.discordapp.net/external/bI_eZQjwX-bEw4AQImtTl93gLcydSbuRAmT-e94jCoM/https/pbs.twimg.com/media/FDLKSyTVIAYwzPX.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}